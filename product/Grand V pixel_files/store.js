var olCheckoutButtonSelector = ["[alt='checkout with afterpay']","[name='checkout']", "[name='checkout_link']", "[href='/checkout']", "[href='/checkout ']", "form[action='/checkout'] input[type='submit']", "input[name='checkout']", "button[name='checkout']", "button.new_checkout_button", "input[value='Checkout']", "input[value='Check out']", "button:contains('Checkout'):not(.cart_button)", "button:contains('Check out'):not(.cart_button)", "a[href='/checkout']", "input[name='goto_pp']", "button.additional-checkout-button", "div.additional-checkout-button", "[href='/apps/request-quote?page=request']", "#buy-me-cart", "#buy-me-add-to-cart-btn"].join(", ");
var directCheckoutButtonSelector = ["button:contains('Checkout'):not(.cart_button)", "button:contains('Check out'):not(.cart_button)", "button:contains('CHECKOUT'):not(.cart_button)", "button:contains('Check Out'):not(.cart_button)", ".checkoutcartbtn"].join(", ");
var updateButtonSelector = ["input[name='update']", "button[name='update']", ".update_subtotal", "#update-cart[name!='checkout']" ].join(", ");
var olQuantityInputField = [':input[name="updates[]"]' , '.form-cart' , '.ajaxcart__qty-num' , '.ajaxifyCart--num', '.cart-qty', '.cart-item__quantity', '.quantity', '.quantity-selector', '.cart__qty-input', '.cart-drawer__item-quantity', '.cart-item__qty-input', '.quantity-input', '.product-quantity-text'].join(", ");
var additionalCheckoutSelector = [".cart-checkout-additional", ".additional-checkout-buttons", ".additional_checkout_buttons", ".cart__additional_checkout", 'button.additional_checkout_button', '.additional_checkout_button', '.additional-checkout-button button:not(.additional-checkout-button--applepay)', '.additional-checkout-button:not(.additional-checkout-button--apple-pay)', '.add_to_cart_11', '.dynamic-checkout__content', '.cart-mini-actions-checkout', '.product-menu-button', ".cart-menu-button-checkout", ".cart-menu-button"].join(", ");
var olQuantityAdjustSelector = [".js-qty__adjust", ".ajaxifyCart--qty-adjuster", ".quantity-minus", ".quantity-plus", ".global-minus", ".global-plus"].join(", ");
var olDynamicCheckoutButtonSelector = [".shopify-payment-button", ".shopify-payment-button__button", ".dynamic-checkout__content", ".sp-dynamic-checkout-button-primary", ".shopify-payment-button__button--unbranded"].join(", ")

var OL_STATES = {
    INIT : {value: 0, description: 'initializing'},
    LOADING : {value: 1, description: 'loading'},
    CHECKING : {value: 2, description: 'checking cart'},
    TIMEOUT : {value: 3, description: 'load or check timeout'},
    BLOCK : {value: 4, description: 'checkout blocked'},
    CHANGED : {value: 5, description: 'change unchecked'},
    UNKNOWN : {value: 6, description: 'potential change pending'},
    PASS : {value: 7, description: 'allow checkout'},
    BYPASSED : {value: 8, description: 'OrderLogic bypassed'}
};

var ol_current_state = OL_STATES.INIT;

var ol_checkout_ok = function() {
  return (ol_current_state == OL_STATES.PASS || ol_current_state == OL_STATES.BYPASSED || ol_current_state == OL_STATES.TIMEOUT)
};

window.IntegrationCheckoutClick = function() {
    return {
        required: ol_checkout_ok()
    };
}
window.BUY_ME_WIDGET_CHECKOUT_CALLBACK = ol_checkout_ok
window.BUY_ME_CART_CHECKOUT_CALLBACK = ol_checkout_ok

var logger = function() {
    var oldConsoleLog = null;
    var pub = {};

    pub.enableLogger =  function enableLogger() {
        if(oldConsoleLog == null)
            return;
        window['console']['log'] = oldConsoleLog;
    };

    pub.disableLogger = function disableLogger() {
        oldConsoleLog = console.log;
        window['console']['log'] = function() {};
    };
    return pub;
}();

var olLoadScript = function(url, callback, failure){
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            if (typeof(callback)=="function") {
                callback();
            }
        };
        script.onerror = function(){
            if (typeof(failure)=="function") {
                failure();
            }
        }
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

var olLoadStyle = function(href) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.media = 'all';
    head.appendChild(link);
};

var olComputeHash = function(obj) {
    obj = JSON.stringify(obj);
    var hash = 0;
    if (obj.length == 0) return hash;
    for (i = 0; i < obj.length; i++) {
        char = obj.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

if (typeof olCreateStorage == 'undefined') {
    var olCreateStorage = function (name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    };
}

if (typeof olReadStorage == 'undefined') {
    var olReadStorage = function (name) {
        return JSON.parse(localStorage.getItem(name));
    };
}
var olEraseStorage = function(name) {
    localStorage.removeItem(name);
};

var olClearStorage = function() {
    olEraseStorage("__olNoAlert");
    olEraseStorage("__olCartDigest");
};

/*
 * This is an ajax listener, broadcast events when they happen
 */
var olopen = window.XMLHttpRequest.prototype.open,
    olsend = window.XMLHttpRequest.prototype.send,
    onReadyStateChange;

function olBroadcastEvent(eventName) {
    var event; // The custom event that will be created

    if (document.createEvent) {
        event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, true, true);
    } else {
        event = document.createEventObject();
        event.eventType = eventName;
    }

    event.eventName = eventName;

    if (document.createEvent) {
        document.dispatchEvent(event);
    } else {
        document.fireEvent("on" + event.eventType, event);
    }
}

function olOpenReplacement(method, url, async, user, password) {
    var syncMode = async !== false ? 'async' : 'sync';

    var eventName = "ajaxrequest";

    if (method == "POST" && (url.indexOf("/cart/change") > -1 || url == '/cart/update.js' || url.substr(url.length - 12) == '/cart/add.js' || url == '/cart.js')) {
        eventName = "cartchanged";
    } else if (method == "GET" && url.indexOf("/cart/change") > -1 ) {
        eventName = "cartchanged";
    } else if ((method == "GET" && url.indexOf("cart.js") > -1 && url.indexOf("internal") == -1) || (method == "GET" && url.indexOf("cart?") > -1 )) {
        eventName = "cartloaded";
    }

    olBroadcastEvent(eventName);

    return olopen.apply(this, arguments);
}

function olSendReplacement(data) {

    if(this.onreadystatechange && this.onreadystatechange != olOnReadyStateChangeReplacement) {
        this._onreadystatechange = this.onreadystatechange;
    }
    this.onreadystatechange = olOnReadyStateChangeReplacement;

    return olsend.apply(this, arguments);
}

function olOnReadyStateChangeReplacement() {
    // TODO: Move event checks and broadcasts from olOpenReplacement here. Save current cart without wait or additional request.
    // Can't do this without also intercepting the fetch response below
    if(this._onreadystatechange) {
        return this._onreadystatechange.apply(this, arguments);
    }
}

window.XMLHttpRequest.prototype.open = olOpenReplacement;
window.XMLHttpRequest.prototype.send = olSendReplacement;

if ('fetch' in window) {
    // TODO: Intercept the response and save the cart from the response rather than needing to make a new fetch in our broadcast event
    // See 2nd answer and comment here: https://stackoverflow.com/questions/45425169/intercept-fetch-api-responses-and-request-in-javascript#answer-53448336
    const constantFetch = window.fetch;
    window.fetch = async function() {
        var url = '';
        arg0 = arguments[0];
        if (typeof(arg0) == 'string') {
            url = arg0;
        }
        if (typeof(arg0) == 'object') {
            if (typeof(arg0.toString) == 'function') {
                url = arg0.toString();
                if (url == '[object Request]') {
                    url = arg0.url;
                }
            }
        }
        method = '';
        if (typeof(arguments[1])=='object') {
            method = arguments[1].method;
        }
        var eventName = "ajaxrequest";
        var awaitCartChange = false
        if(typeof method != 'undefined') method = method.toUpperCase();
        if (method == "POST" && (url.indexOf("/cart/change") > -1 || url.indexOf("/cart/update") > -1 || url.indexOf("/cart/add") > -1 || url == '/cart.js')) {
            if (['Athens','Charge'].includes(Shopify.theme.name)) {
                awaitCartChange = true;
            }
            eventName = "cartchanged";
        } else if (method == "GET" && url.indexOf("/cart/change") > -1 ) {
            eventName = "cartchanged";
        } else if (method == "GET" && url.indexOf("cart?") > -1 && url.indexOf("internal") == -1) {
            eventName = "cartloaded";
        }

        olBroadcastEvent(eventName);

        const response = await constantFetch.apply(this, arguments);
        if (awaitCartChange) {
            response
                .clone()
                .json()
                .then(data => OrderLogic.attachConditionActions(data))
                .then(olBroadcastEvent("cartloaded"))
        }
        return response;
    }
}

var orderLogicJavaScript = function($){

    // used for theme changes to work with OrderLogic. Don't change the arguments
    UpdateStepButtons = function(product_id, newVal, minVal, maxVal){
      if (newVal <= minVal && minVal > 0) {
          $('#product-minus-button-' + product_id).prop('disabled', true);
      } else {
          $('#product-minus-button-' + product_id).prop('disabled', false);
      }

      if (newVal >= maxVal && maxVal > 0) {
          $('#product-plus-button-' + product_id).prop('disabled', true);
      } else {
          $('#product-plus-button-' + product_id).prop('disabled', false);
      }
    }

    // used for theme changes to work with OrderLogic. Don't change the arguments
    StepIntValue = function(product_id, minVal, maxVal, step){
        if(typeof jQuery != 'undefined'){
            input_field = $('#product-quantity-' + product_id);

            var currentVal = parseInt(input_field.val());
            if (isNaN(currentVal)) { currentVal = 0; };
            var newVal = currentVal + step;
            var remainder = currentVal % Math.abs(step)

            if(remainder != 0){
              if(step > 0){
                newVal = Math.ceil(currentVal/step)*step
              }
              if(step < 0){
                newVal = Math.floor(currentVal/Math.abs(step))*Math.abs(step)
              }
            }

            if (newVal < minVal) {
                newVal = minVal;
            }

            if (maxVal > -1 && newVal > maxVal) {
                newVal = maxVal;
            }

            UpdateStepButtons(product_id, newVal, minVal, maxVal)

            input_field.val(newVal);
            $('#product-hidden-quantity-' + product_id).val(newVal);
        }
    }

    /* OrderLogic's JavaScript here.
     $ in this scope references the jQuery object we'll use.
     Don't use 'jQuery', or 'jQuery191', here. Use the dollar sign
     that was passed as argument.*/

    // check to see if we are on a cart page and if so we need to make sure they don't change product quantities and checkout behind our back
    var urlMatches = document.URL.match(/\/cart[^\/]*$/);
    var smar7_upsell_delay = false;
    var smar7_upsell_delayed = false;
    var upsell_delay = false;
    var upsell_delayed = false;
    var recurring_orders_delay = false;
    var recurring_orders_delayed = false;
    var cartnote_delay = false;
    var cartnote_delayed = false;
    var termscheck_delay = false;
    var termscheck_delayed = false;
    var direct_checkout_delay = false;
    var direct_checkout_delayed = false;
    var delivery_check_delay = false;
    var delivery_check_delayed = false;
    var checkoutactions_delay = false;
    var checkoutactions_delayed = false;
    var amazon_payment_delay = false;
    var amazon_payment_delayed = false;
    var carthook_delay = false;
    var carthook_delayed = false;
    var special_offers_delay = false;
    var special_offers_delayed = false;
    var quantity_breaks_delay = false;
    var quantity_breaks_delayed = false;
    var hulkapps_delay = false;
    var hulkapps_delayed = false;
    var saveFacebox;
    var saveCarthookReact;
    var originalCartItems = {};
    var ajaxCartUpdate = false;

    var minProductQuantityPrompt = "Required minimum order quantity of {{quantity}} for {{product_title}}.";
    var maxProductQuantityPrompt = "Required maximum order quantity of {{quantity}} for {{product_title}}.";
    var minOrderQuantityPrompt = "Your cart doesn't meet the minimum quantity of {{quantity}} items.";
    var maxOrderQuantityPrompt = "Your cart exceeds the maximum quantity of {{quantity}} items.";
    var minOrderAmountPrompt = "Your cart doesn't meet the minimum amount of {{amount}}.";
    var maxOrderAmountPrompt = "Your cart exceeds the maximum amount of {{amount}}.";
    var multipleQuantityPrompt = "{{product_title}} quantity must be a multiple of {{quantity}}.";
    var modalTitle = "Oops!";
    var okButton = "Ok";
    var dismissButton = "Dismiss";
    var updateButton = "Update Cart";
    var cartChangedPrompt = "Your cart has changed. Click ok to update your cart.";
    var customMessage = "Please fix these cart errors before checking out.";

    var setMessages = function(messages) {
        if (typeof messages == "undefined") messages = {};

        if (typeof messages.min_product_quantity_prompt != "undefined" && messages.min_product_quantity_prompt != "") minProductQuantityPrompt = messages.min_product_quantity_prompt;
        if (typeof messages.max_product_quantity_prompt != "undefined" && messages.max_product_quantity_prompt != "") maxProductQuantityPrompt = messages.max_product_quantity_prompt;
        if (typeof messages.min_order_quantity_prompt != "undefined" && messages.min_order_quantity_prompt != "") minOrderQuantityPrompt = messages.min_order_quantity_prompt;
        if (typeof messages.max_order_quantity_prompt != "undefined" && messages.max_order_quantity_prompt != "") maxOrderQuantityPrompt = messages.max_order_quantity_prompt;
        if (typeof messages.min_order_amount_prompt != "undefined" && messages.min_order_amount_prompt != "") minOrderAmountPrompt = messages.min_order_amount_prompt;
        if (typeof messages.max_order_amount_prompt != "undefined" && messages.max_order_amount_prompt != "") maxOrderAmountPrompt = messages.max_order_amount_prompt;
        if (typeof messages.multiple_quantity_prompt != "undefined" && messages.multiple_quantity_prompt != "") multipleQuantityPrompt = messages.multiple_quantity_prompt;

        if (typeof messages.modal_title != "undefined" && messages.modal_title != "") modalTitle = messages.modal_title;
        if (typeof messages.ok_button != "undefined" && messages.ok_button != "") okButton = messages.ok_button;
        if (typeof messages.dismiss_button != "undefined" && messages.dismiss_button != "") dismissButton = messages.dismiss_button;
        if (typeof messages.update_button != "undefined" && messages.update_button != "") updateButton = messages.update_button;
        if (typeof messages.cart_changed_prompt != "undefined" && messages.cart_changed_prompt != "") cartChangedPrompt = messages.cart_changed_prompt;
        if (typeof messages.custom_message != "undefined" && messages.custom_message != "") customMessage = messages.custom_message;
    };

    // build a hash of all form values
    var getCartItems = function() {
        var items = {};
        $(olQuantityInputField).each(function(_, element) {
            if ($(element).is(':visible') || (Shopify.theme.name == "Debut" && !Shopify.theme.id == 89898320009) || Shopify.theme.id == 43881398339 || Shopify.theme.id == 171190413 || Shopify.shop == "faradite.myshopify.com") {
                var key = $(element).attr('id');
                if (typeof key == "undefined" || Shopify.theme.id == 81724768298) key = $(element).data('id');
                if ((typeof key == "undefined") || (typeof key == "string" && key == "")) key = $(element).data('line');
                if (typeof key == "undefined") key = $(element).closest('.cart-item').data('index');
                if (typeof key == "undefined") key = $(element).data('line-id');
                if (!isNaN(parseInt($(element).val()))) {
                    if (typeof items[key] == "undefined") {
                        items[key] = parseInt($(element).val());
                    } else {
                        if(!Shopify.theme.id == 82433343562) {
                            items[key] += parseInt($(element).val());
                        }
                    }
                }
            }
        });
        return items;
    };
    var setOriginalCart = function() {
        originalCartItems = getCartItems();
    };
    var cartChanged = function(alert_user) {
        alert_user = typeof alert_user !== 'undefined' ? alert_user : true;
        var cartChanged = false;
        if (typeof(OrderLogic.inspectProductConditions.monitored_item_in_cart) == "undefined" || OrderLogic.inspectProductConditions.monitored_item_in_cart == false) {
            return false;
        }
        var currentCartItems = getCartItems();
        if ($("input[name='checkout'][clicked=true]").length>0 || $("button[name='checkout'][clicked=true]").length> 0 ||// clicked checkout
            ($("input[name='update'][clicked=true]").length==0 && $("button[name='update'][clicked=true]").length==0 && Shopify.shop != "thrive-market-2.myshopify.com")) { // or other form submit like paypal button handler if not thrive
            Object.keys(currentCartItems).some(function(key) {
                if(typeof originalCartItems[key] == "number" && currentCartItems[key] != originalCartItems[key]) {
                    // sinister-labs  171190413, peppersmithtest 21228388396, narrative 80191979575
                    if ((location.pathname != "/cart" && Shopify.theme.id != 171190413 && Shopify.theme.id != 21228388396 && Shopify.theme.id != 80191979575) ||
                        (Shopify.theme.id == 21228388396 && location.pathname != "/cart" && location.pathname != "/pages/confirm") ||
                        (Shopify.theme.id == 129694236783 && location.pathname == "/cart")) {
                        ajaxCartUpdate = true;
                    }
                    // delete existing callbacks first
                    if (alert_user) {
                        if (!ajaxCartUpdate && Shopify.theme.id != 171190413 && Shopify.theme.id != 36652187757 && Shopify.theme.id != 89898320009) {
                            $(document).off('click.olEvents', olCheckoutButtonSelector);
                            $('.grid__item').off('click.olEvents', olCheckoutButtonSelector);
                            $(olCheckoutButtonSelector).prop('disabled',true);
                        } else {
                            OrderLogic.inspectProductConditions.errors_detected = true;
                        }
                    }
                    cartChanged = true;
                    OrderLogic.setState(OL_STATES.CHANGED);
                    $(document).ready(function(){
                      if(typeof window.history.pushState != "undefined"){
                        history.pushState(null, document.title, location.href);
                      }
                    });
                    if  ((Shopify.theme.name != "Mobilia-Version 5 Sections Jan 2017") && alert_user) {
                        var alertOpts = {
                            title: OrderLogic.customModalTitle(),
                            text: OrderLogic.customCartChanged(),
                            type: "error",
                            showCancelButton: false,
                            cancelButtonText: "",
                            confirmButtonText: OrderLogic.customOk(),
                            allowOutsideClick: false,
                            customClass: "order-logic-sweet-alert"
                        };
                        var callback = function() {
                            if (!ajaxCartUpdate) {
                                originalCartItems = currentCartItems;
                                $("input.bold_hidden_input.checkout").remove(); //compatibility with BOLD inventory validation
                                update_button = $(updateButtonSelector);
                                if (update_button.length > 0) {
                                    $(update_button).prop('disabled', false);
                                    $(update_button).closest("form").attr("action", "/cart");
                                    $(olCheckoutButtonSelector).prop('disabled',true);
                                    $(update_button).click();
                                } else {
                                    submit_button = $(olCheckoutButtonSelector);
                                    $(submit_button).attr('name','update');
                                    $(submit_button).prop('disabled',false);
                                    $(submit_button).click();
                                }
                            } else {
                                $(document).on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
                                $(olCheckoutButtonSelector).prop('disabled',false);
                            }
                        };
                        if (typeof window.Sweetalert2 == "function") {
                            alertOpts.reverseButtons = true;
                            alertOpts.html = alertOpts.text;
                            $(function(){
                                sweetAlert(alertOpts).then(function(result){callback(result.value)});
                            });
                        } else {
                            alertOpts.html = true;
                            $(function(){
                                sweetAlert(alertOpts, callback);
                            });
                        }

                    }
                }
            });
        }
        return cartChanged;
    };
    $('body').on('click', olQuantityAdjustSelector, function(){
        if (typeof(OrderLogic.inspectProductConditions.monitored_item_in_cart) == "undefined" || OrderLogic.inspectProductConditions.monitored_item_in_cart == false) {
            return;
        }
        OrderLogic.setState(OL_STATES.CHANGED);
    });
    $('body').on('focus', olQuantityInputField, function(){
         if (typeof(OrderLogic.inspectProductConditions.monitored_item_in_cart) == "undefined" || OrderLogic.inspectProductConditions.monitored_item_in_cart == false) {
            return;
         }
        OrderLogic.setState(OL_STATES.UNKNOWN);
    });
    $('body').on('blur', olQuantityInputField, function(){
        cart_changed = cartChanged(Shopify.shop == "test546715695.myshopify.com" ? true : false);
        if(!cart_changed) {
            OrderLogic.inspectProductConditions.errors_detected ? OrderLogic.setState(OL_STATES.BLOCK) : OrderLogic.setState(OL_STATES.PASS);
        }
    });

    var identifyClicks = function(clicked_object) {
        $("form input[type=submit]").removeAttr("clicked");
        $(clicked_object).attr("clicked", "true");
    };
    // Global style. Move to stylesheet if this grows
    $("<style> div.order-logic-sweet-alert { max-height: 95%; overflow-y: auto; } @media (max-width:540px){div.order-logic-sweet-alert { top: 0px; margin-top: 15px !important; }}</style>").appendTo("head");
    $("<style type='text/css'>div.order-logic-sweet-alert{ z-index: 100000000; border: 1px solid lightgrey;} div.sweet-overlay{z-index: 99999999;} div.order-logic-sweet-alert fieldset{margin: 0; padding: 0} div.order-logic-sweet-alert fieldset input[type='text'] {display: none !important;}</style>").appendTo("head");
    $("<style type='text/css'> .order-logic-sweet-alert button{ font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: normal} </style>").appendTo("head");
    if (typeof ol_debug !== 'undefined' && ol_debug ) {
        $('body').prepend('<div>!</div>')
        if (ol_debug == true) {
            $('body').prepend('<div id="olwarning" style="color: black;position: fixed;top: 0px;left: 0px;width: 100%;z-index: 10000000;background-color: red;text-align: center;">WARNING: Using dev store.js from dev.orderlogicapp.com. Reinstall Strong Enforcement on ' + Shopify.shop + ' for latest debugging features.</a></div>');
        } else {
            $('body').prepend('<div id="olwarning" style="color: black;position: fixed;top: 0px;left: 0px;width: 100%;z-index: 10000000;background-color: red;text-align: center;">WARNING: Using dev store.js from ' + ol_debug + '. <a href="' + window.location.pathname + '?olDebug=false" style="color: blue">Cancel</a></div>');
        }
    };
    $("form input[type=submit]").on('click.olEvents', function() {
        identifyClicks(this);
    });
    $("button[type=submit]").on('click.olEvents', function() {
        identifyClicks(this);
    });
    if(Object.prototype.toString.call( urlMatches ) === '[object Array]' && urlMatches.length > 0) {
        upsell_delay = true;
        recurring_orders_delay = true;
        cartnote_delay = true;
        termscheck_delay = true;
        delivery_check_delay = true;
        direct_checkout_delay = true;
        checkoutactions_delay = true;
        smar7_upsell_delay = true;
        amazon_payment_delay = true;
        carthook_delay = true;
        special_offers_delay = true;
        quantity_breaks_delay = true;
        hulkapps_delay = true;
        $(function(){
            originalCartItems = getCartItems();
        });
        // if (Object.keys(originalCartItems).length == 0) {
        //     alert('Warning - cart size 0');
        //     debugger;
        // } else {
        //     alert('Cart size ' + Object.keys(originalCartItems).length)
        // }

        $("form[action='/cart']").submit(function(e){
            // first check if there is difference between current cart and original cart
            if (!ajaxCartUpdate && !(Shopify.theme.name == "Retina") && !(Shopify.theme.name == "Mobilia-Version 5 Sections Jan 2017") && !(Shopify.theme.id == 166886281) && !(Shopify.theme.id == 142724417) && !(Shopify.theme.id == 186848847) && !(Shopify.shop=='bop-merchant.myshopify.com') && !($(document.activeElement)[0] == $(updateButtonSelector)[0]) && cartChanged()) {
                OrderLogic.delayDirectCheckout();
                OrderLogic.delayRecurringOrders();
                OrderLogic.delayDeliverycheck();
                OrderLogic.delayCheckoutActions();
                OrderLogic.delaySmar7Upsell();
                OrderLogic.delayCarthook();
                OrderLogic.delaySpecialOffers();
                OrderLogic.delayQuantityBreaks();
                OrderLogic.delayHulkApps();
                return false;
            }
        });
    }

    OrderLogic = {
        ALERTS_KEY: "__olAlertsForShop",
        DEFAULT_MONEY_FORMAT:  "${{amount}}",
        MONEY_FORMAT_REGEX: /\{\{\s*(\w+)\s*\}\}/,
        MONEY_FORMAT_HELPER_REGEX: /(\d)(?=(\d\d\d)+(?!\d))/g,
        productsMetadata: {}, // an object with product ids or tags as keys
        cartData: {}, // $.getJSON('/cart.js', function(data) { cartData = data }); // <-- use that to see on a client what cart data looks like
        showHideAdditionalCheckoutButtons: function() {
          if (ol_current_state == OL_STATES.TIMEOUT || ol_current_state == OL_STATES.PASS || ol_current_state == OL_STATES.BYPASSED) {
              $(additionalCheckoutSelector).show();
          } else {
              $(additionalCheckoutSelector).hide();
          }
        },
        setState: function(state) {
            if( typeof olBypassAlert != "undefined" ) {
                state = OL_STATES.BYPASSED;
            }
            if (state != ol_current_state) {
                ol_current_state = state;
                olBroadcastEvent("olStateChanged");
                OrderLogic.showHideAdditionalCheckoutButtons();

                if (state == OL_STATES.LOADING || state == OL_STATES.CHECKING) {
                    setTimeout(function() {
                        if (ol_current_state == OL_STATES.LOADING || ol_current_state == OL_STATES.CHECKING) {
                            OrderLogic.setState(OL_STATES.TIMEOUT);
                        }
                    }, 6000);
                }
            }
        },
        processMetadata: function() {
            if(typeof olProductData == "object") {
                var product_ids = Object.keys(olProductData)
                for(var i = 0; i < product_ids.length; i++) {
                    var productData = olProductData[product_ids[i]];

                    for(var j = 0; j < productData.tags.length; j++) {
                        var tag = productData.tags[j].toLowerCase();
                        if(OrderLogic.productsMetadata[tag]) {
                            OrderLogic.productsMetadata[tag].push(parseInt(product_ids[i]));
                        } else {
                            OrderLogic.productsMetadata[tag] = [parseInt(product_ids[i])];
                        }
                    }
                }
            }
        },
        loadMissingTagData: function(cartData) {
          cartData.items.forEach(function(product){
              if(typeof olProductData != "object" || typeof olProductData[product.product_id] != "object") {
                  OrderLogic.fetchMetadataForProduct(product.handle)
              }
          });
        },
        fetchMetadataForProduct: function(handle) {
            $.getJSON('/products/' + handle + '.json', function(data) {
                var productId = data.product.id;
                var tags = data.product.tags.split(", ");
                if(typeof olProductData != "object") {
                    olProductData = {};
                }
                olProductData[productId] = {tags: tags, variant_count: data.product.variants.length};
                for(var i = 0; i < tags.length; i++) {
                    var tag = tags[i].toLowerCase();
                    if (OrderLogic.productsMetadata[tag]) {
                        OrderLogic.productsMetadata[tag].push(productId);
                    } else {
                        OrderLogic.productsMetadata[tag] = [productId];
                    }
                }
                OrderLogic.attachConditionActions();
            });
        },
        getAlerts: function() {
            var alerts = olReadStorage(OrderLogic.ALERTS_KEY);
            if(typeof alerts == "undefined" || alerts == null) {
                alerts = [];
            }
            return alerts;
        },
        setAlerted: function(alerted) {
            if(typeof alerted == "undefined") {
                alerted = [];
            }
            if(alerted.constructor == Array) {
                olCreateStorage(OrderLogic.ALERTS_KEY, alerted);
            } else {
                console.warn("Object passed to setAlerted in OrderLogic");
            }
        },
        syncAlertedToErrors: function(errors) {
            var alerted = [];
            for(var key in errors) {
                if(key.match(/^\d+$/) != null) {
                    alerted.push(key);
                }
                if (key == 'store') {
                    for (var subkey in errors.store) {
                        if (subkey == 'max_price_violation' || subkey == 'max_quantity_violation' ){
                            alerted.push(subkey);
                        }
                    }
                }
            }
            OrderLogic.setAlerted(alerted);
        },
        cartHasLimitViolationsNotAlerted: function(errors) {
            if (Shopify.shop == "camblocker.myshopify.com" || Shopify.shop == "screen-it-green.myshopify.com" || Shopify.shop == "wholesale-unlimited-inc.myshopify.com" || Shopify.shop == "mbj-royaltybank.myshopify.com") {
                return true;
            }
            var alerts = OrderLogic.getAlerts();
            for(var key in errors) {
                if(key.match(/^\d+$/) != null) {
                    if(alerts.indexOf(key)==-1) {
                        OrderLogic.syncAlertedToErrors(errors);
                        return true;
                    }
                }
                if (key == 'store') {
                    for (var subkey in errors.store) {
                        if ((subkey == 'max_price_violation' || subkey == 'max_quantity_violation') && (alerts.indexOf(subkey)==-1)){
                            OrderLogic.syncAlertedToErrors(errors);
                            return true;
                        }
                    }
                }
            }
            return false;
        },
        formatMoneyHelper: function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? 2 : arguments[1]
                , n = arguments.length <= 2 || void 0 === arguments[2] ? "," : arguments[2]
                , i = arguments.length <= 3 || void 0 === arguments[3] ? "." : arguments[3];
            if (isNaN(t) || null == t)
                return 0;
            var o = (t / 100).toFixed(e)
                , r = o.split(".")
                , a = r[0].replace(OrderLogic.MONEY_FORMAT_HELPER_REGEX, "$1" + n)
                , s = r[1] ? i + r[1] : "";
            return a + s
        },
        shopifyFormatMoney: function(amount, format) {
            var amount_fix = 100 * amount;
            "string" == typeof amount_fix && (amount_fix = amount_fix.replace(".", ""));
            var formatted_amount_string = "",
                format = format || OrderLogic.DEFAULT_MONEY_FORMAT,
                cleaned_format = format.match(OrderLogic.MONEY_FORMAT_REGEX);
            switch (cleaned_format || (format = OrderLogic.DEFAULT_MONEY_FORMAT,
                cleaned_format = format.match(OrderLogic.MONEY_FORMAT_REGEX)),
                cleaned_format[1]) {
                case "amount":
                    formatted_amount_string = OrderLogic.formatMoneyHelper(amount_fix);
                    break;
                case "amount_no_decimals":
                    formatted_amount_string = OrderLogic.formatMoneyHelper(amount_fix, 0);
                    break;
                case "amount_with_comma_separator":
                    formatted_amount_string = OrderLogic.formatMoneyHelper(amount_fix, 2, ".", ",");
                    break;
                case "amount_no_decimals_with_comma_separator":
                    formatted_amount_string = OrderLogic.formatMoneyHelper(amount_fix, 0, ".", ",");
                    break;
                case "amount_no_decimals_with_space_separator":
                    formatted_amount_string = OrderLogic.formatMoneyHelper(amount_fix, 0, " ");
                    break;
                default:
                    formatted_amount_string = OrderLogic.formatMoneyHelper(amount_fix)
            }
            return format.replace(OrderLogic.MONEY_FORMAT_REGEX, formatted_amount_string)
        },
        formatMoney: function(amount) {
            var modifier = "$";
            if (Shopify.shop == "sam-wilson-wholesale.myshopify.com" || Shopify.shop == "dassie-artisan-trade.myshopify.com" || Shopify.shop == "wild-knight-vodka.myshopify.com" || Shopify.shop == "wholesale-dottysden.myshopify.com" || Shopify.shop == "yayvo-2.myshopify.com" || Shopify.shop == "buddy-and-bear-wholesale.myshopify.com" || Shopify.shop == "specialistlightingonline.myshopify.com" || Shopify.shop == "rollhard-store.myshopify.com" || Shopify.shop == "bhc-e-liquid-wholesale.myshopify.com" || Shopify.shop == "the-natural-dog-hub.myshopify.com" || Shopify.shop == "lushlove.myshopify.com" || Shopify.shop == "varofoods.myshopify.com" || Shopify.shop == 'super-cool-products.myshopify.com' || Shopify.shop == 'm-r-merchandising-wholesale.myshopify.com' || Shopify.shop == 'mandrwholesale.myshopify.com' || Shopify.shop == "design-fiore-di-loto.myshopify.com" || Shopify.shop == "led-lightsmith-com.myshopify.com" || Shopify.shop == "plum-and-ashby-wholesale.myshopify.com" || Shopify.shop == "grease-monkey.myshopify.com" || Shopify.shop == "little-plover.myshopify.com" || Shopify.shop == "lualu-london.myshopify.com" || Shopify.shop == "lualu.myshopify.com" || Shopify.shop == "itm-components.myshopify.com" || Shopify.shop == "vape-distillery-distribution.myshopify.com" || Shopify.shop == "style-centre-wholesale.myshopify.com" || Shopify.shop == "little-jersey-biltong-company.myshopify.com" || Shopify.shop == "smallpetselect-uk.myshopify.com") {
                modifier = "£";
            } else if (Shopify.shop == "truck-elec.myshopify.com" || Shopify.shop == "saracenishop.myshopify.com" || Shopify.shop == "don-racine.myshopify.com" || Shopify.shop == "vivienwalshstudio.myshopify.com" || Shopify.shop == "himmel-im-herzen.myshopify.com" || Shopify.shop == "kolokoline.myshopify.com" || Shopify.shop == "paulpanier.myshopify.com" || Shopify.shop == "the-beer-shop-by-moondogs.myshopify.com") {
                modifier = "€";
            } else if (Shopify.shop == "onelook-in.myshopify.com" || Shopify.shop == "fishkartt.myshopify.com" || Shopify.shop == "world-globepanda.myshopify.com") {
                modifier = "Rs. "; // India
            } else if (Shopify.shop == "pettah-online.myshopify.com") {
                modifier = "Rs "; // Sri Lanka
            } else if (Shopify.shop == "lagos-fresh-foodstuffs-market.myshopify.com") {
                modifier = "₦";
            } else if (Shopify.shop == "thetappingtapir.myshopify.com") {
                modifier = "RM";
            } else if (Shopify.shop == "elizabeths-accessories.myshopify.com") {
                modifier = "₱";
            } else if (Shopify.shop == "irish-sea-food-company.myshopify.com") {
                modifier = "AED ";
            } else if (Shopify.shop == "milkyy-dxb.myshopify.com" || Shopify.shop == "ib-mart.myshopify.com") {
                modifier = "Dhs. "
            } else if (Shopify.shop == "dropmeusa.myshopify.com") {
                modifier = " NIS";
                return parseFloat(amount / 100).formatMoney() + modifier;
            } else if (Shopify.shop == "b2bowery-com.myshopify.com") {
                modifier = " Kč";
                return parseFloat(amount / 100).formatMoney(2,',','.') + modifier;
            } else if (Shopify.shop == "exportanet.myshopify.com") {
                modifier = "R$ ";
                return modifier + parseFloat(amount / 100).formatMoney(2,',','.');
            } else if (Shopify.shop == "bees-deal.myshopify.com") {
                modifier = "₦";
            } else if (Shopify.shop == "ecgo.myshopify.com" || Shopify.shop == "s-foodies.myshopify.com") {
                return Shopify.formatMoney(amount,"{{amount}} kr");
            } else if (Shopify.shop == "flawlesscc.myshopify.com" || Shopify.shop == "medicorum.myshopify.com") {
                modifier = "R ";
            } else if (Shopify.shop == "buy-honeymelts.myshopify.com") {
                return Shopify.formatMoney(amount, "{{amount}} AED");
            } else if (Shopify.shop == "le-chat-blanch.myshopify.com") {
                return Shopify.formatMoney(amount, "{{amount}} ฿"); //Thailand
            } else if (typeof olConstraints == "object" && typeof olConstraints.money_format == "string") {
                return OrderLogic.shopifyFormatMoney(amount / 100, olConstraints.money_format)
            }
            return modifier + parseFloat(amount / 100).formatMoney();
        },
        interpolateValues: function(str, values) {
            if (typeof str == "undefined" || str === null)
                str = "";
            if (typeof values == "undefined")
                values = {};

            for(var key in values) {
                str = str.replace("{{" + key + "}}", values[key]);
            }
            return str;
        },
        customErrorString: function(error, type) {
            if (type == "min_price_violation") {
                return "<p>" + OrderLogic.interpolateValues(minOrderAmountPrompt, {amount: OrderLogic.formatMoney(error)}) + "</p>";
            } else if (type == "max_price_violation") {
                return "<p>" + OrderLogic.interpolateValues(maxOrderAmountPrompt, {amount: OrderLogic.formatMoney(error)}) + "</p>";
            } else if (type == "min_quantity_violation") {
                return "<p>" + OrderLogic.interpolateValues(minOrderQuantityPrompt, {quantity: error}) +"</p>";
            } else if (type == "max_quantity_violation") {
                return "<p>" + OrderLogic.interpolateValues(maxOrderQuantityPrompt, {quantity: error}) + "</p>";
            } else if (type == "multiple") {
                return "<p>" + OrderLogic.interpolateValues(multipleQuantityPrompt, {
                        quantity: error.amount,
                        product_title: error.product.title,
                        SKUs_list: error.SKUs_list.join(', ')
                    }) + "</p>";
            } else if (type == "minimum") {
                return "<p>" + OrderLogic.interpolateValues(minProductQuantityPrompt, {quantity: error.amount, product_title: error.product.title, SKUs_list: error.SKUs_list.join(', ')}) + "</p>";
            } else if (type == "maximum") {
                return "<p>" + OrderLogic.interpolateValues(maxProductQuantityPrompt, {quantity: error.amount, product_title: error.product.title, SKUs_list: error.SKUs_list.join(', ')}) + "</p>";
            } else if (type == "collective_tags") {
                return "<p>" + error.customer_message + "</p>";
            } else {
                return "";
            }
        },
        customErrorMessage: function(quantityString) {
            return quantityString + "<br><p>" + customMessage + "</p>";
        },
        customModalTitle: function() {
            return modalTitle;
        },
        customOk: function() {
            return okButton;
        },
        customDismiss: function() {
            return dismissButton;
        },
        customUpdate: function() {
            return updateButton;
        },
        customCartChanged: function() {
            return cartChangedPrompt;
        },
        createOrAddToObject: function(existingObj, key, value) {
            if(typeof existingObj == "object") {
                existingObj[key] = value;
                return existingObj;
            } else {
                var newHash = {};
                newHash[key] = value;
                return newHash;
            }
        },
        notifyUser: function(errors) {
            // first we need to set the zindex higher than everyone else's
            $('.ajaxcart__close').click();

            var quantityString = "";
            Object.keys(errors).forEach(function(errorObjectKey) {
                var errorObjectKey = errorObjectKey; // change the scope for child function call
                if (errorObjectKey == "fixable") return;
                var errorObject = errors[errorObjectKey];
                Object.keys(errorObject).forEach(function(errorKey) {
                    if (errorKey == "SKUs_list") return;
                    var error = errorObject[errorKey];
                    error["SKUs_list"] = errorObject["SKUs_list"];
                    quantityString += OrderLogic.customErrorString(error, errorObjectKey == 'collective_tags' ? errorObjectKey : errorKey);
                });
            });
            var alertOpts = {
                title: OrderLogic.customModalTitle(),
                text: OrderLogic.customErrorMessage(quantityString),
                type: "error",
                showCancelButton: true,
                cancelButtonText: OrderLogic.customDismiss(),
                confirmButtonText: OrderLogic.customUpdate(),
                allowOutsideClick: true,
                customClass: "order-logic-sweet-alert"
            };
            if (!errors["fixable"] || Shopify.shop == "oxygen-yoga-fitness.myshopify.com" || Shopify.shop == "myfamilybuilders.myshopify.com" || Shopify.shop == "pom-usa.myshopify.com" || Shopify.shop == "ksenia-penkina.myshopify.com" || Shopify.shop == "ksenia-penkina-ru.myshopify.com") {
                alertOpts.showCancelButton = false;
                alertOpts.cancelButtonText = "";
                alertOpts.confirmButtonText = OrderLogic.customOk();
            } else if (errors["fixable"] && (Shopify.shop == "essence-essentials.myshopify.com" || Shopify.shop == "310-nutrition.myshopify.com" || Shopify.shop == "familyotc.myshopify.com" || Shopify.shop == "revisionskincare-b2b.myshopify.com" || Shopify.shop == "jojo-hobby-n-stuff.myshopify.com" || Shopify.shop == "wholesale-unlimited-inc.myshopify.com")) {
                alertOpts.showCancelButton = false;
                alertOpts.allowOutsideClick = false;
            }

            var callback = function(status) {
                if (status && (status == true || status['value'] == true) && errors["fixable"]) {
                    // success
                    updateObj = {};
                    errors = OrderLogic["lastErrors"];
                    Object.keys(errors).forEach(function(error_key) {
                        var error = errors[error_key];
                        if(typeof error["variant_id"] == "undefined") {
                            return;
                        }
                        var amount;
                        if (typeof error["minimum"] != "undefined") {
                            amount = error["minimum"]["amount"];
                        } else if (typeof error["maximum"] != "undefined") {
                            amount = error["maximum"]["amount"];
                        }
                        if (typeof amount == "undefined") {
                            // TODO - need to figure out what the amount in cart is and set this to the nearest higher multiple amount
                            //amount = error["multiple"]["amount"];
                        }
                        if (typeof amount != "undefined") {
                            updateObj[error["variant_id"]] = parseInt(amount);
                        }
                    });
                    $.post('/cart/update.js', {updates: updateObj}, function() {
                        if (((Shopify.shop == "310-nutrition.myshopify.com" && document.location.pathname != "/cart") || Shopify.shop == "teadorabeauty.myshopify.com" || Shopify.shop == "store4deals.myshopify.com" || Shopify.shop == "seven-sisters-scones.myshopify.com") && typeof ajaxCart != 'undefined') {
                            ajaxCart.load();
                        } else {
                            window.location.reload();
                        }
                    }, "JSON");
                } else {
                    $('.btn--loading').removeClass('btn--loading');
                }
            };
            if (typeof window.Sweetalert2 == "function") {
                alertOpts.reverseButtons = true;
                alertOpts.html = alertOpts.text;
                $(function(){
                    sweetAlert(alertOpts).then(callback);
                });
            } else {
                alertOpts.html = true;
                $(function(){
                    sweetAlert(alertOpts, callback);
                });
            }
            $("form input[type=submit]").removeAttr("clicked");
        },
        conditionalDelayRecurringOrders: function() {
            OrderLogic.delayRecurringOrders();
            if (recurring_orders_delayed) {
                recurring_orders_delay = cartChanged();
            }
        },
        delayRecurringOrders: function() {
            if (recurring_orders_delay && !recurring_orders_delayed && typeof(BOLD)!="undefined" && typeof(BOLD.recurring_orders)!="undefined" && typeof(BOLD.recurring_orders.app)!="undefined" && typeof(BOLD.recurring_orders.app.cartWidget)!="undefined" ) {
                BOLD.recurring_orders.app.cartWidget.preCheckoutPromiseFunction = function(resolve) {
                    if (!recurring_orders_delay) {
                        resolve();
                    }
                };
                recurring_orders_delayed = true;
            }
        },
        conditionalDelayUpsell: function() {
            OrderLogic.delayUpsell();
            if (upsell_delayed) {
                upsell_delay = cartChanged();
            }
        },
        delayUpsell: function() {
            if (upsell_delay && !upsell_delayed && typeof(upsell_loaded)=="function") {
                saveFacebox = ujQuery.facebox;
                ujQuery.facebox = function(data,klass){
                    if(!upsell_delay){
                        upsell_delayed = false;
                        ujQuery.facebox = saveFacebox;
                        ujQuery.facebox(data,klass);
                    }
                };
                upsell_delayed = true;
            }
        },
        conditionalDelayHulkApps: function() {
          OrderLogic.delayHulkApps();
          if (hulkapps_delayed) {
              hulkapps_delay = cartChanged();
          }
        },
        delayHulkApps: function () {
            if (hulkapps_delay && !hulkapps_delayed && typeof(hulkappsCheckout)=="function") {
                saveHulkappsCheckout = hulkappsCheckout;
                hulkappsCheckout = function(){
                    if(!hulkapps_delay){
                        hulkapps_delayed = false;
                        hulkappsCheckout = saveHulkappsCheckout;
                        saveHulkappsCheckout();
                    }
                };
                hulkapps_delayed = true;
            }
        },
        conditionalDelayQuantityBreaks: function() {
            OrderLogic.delayQuantityBreaks();
            if (quantity_breaks_delayed) {
                quantity_breaks_delay = cartChanged();
            }
        },
        delayQuantityBreaks: function () {
            if (quantity_breaks_delay && !quantity_breaks_delayed && typeof(shappify_qb_got_cart)=="function") {
                save_shappify_qb_got_cart = shappify_qb_got_cart;
                shappify_qb_got_cart = function(data, success_callback){
                    if(!quantity_breaks_delay){
                        quantity_breaks_delayed = false;
                        shappify_qb_got_cart = save_shappify_qb_got_cart;
                        shappify_qb_got_cart(data, success_callback);
                    } else if (typeof(success_callback)=="function" && success_callback.toString().replace(/\s/g,'').indexOf('window.location="/checkout"') !== -1) {
                        save_shappify_qb_got_cart(data, function(finalcart) {
                        });
                    } else {
                        save_shappify_qb_got_cart(data, success_callback);
                    }
                };
                quantity_breaks_delayed = true;
            }
        },
        conditionalDelaySpecialOffers: function() {
            OrderLogic.delaySpecialOffers();
            if (special_offers_delayed) {
                special_offers_delay = cartChanged();
            }
        },
        delaySpecialOffers: function () {
            if (special_offers_delay && !special_offers_delayed && typeof(sasoCheckout)=="function") {
                saveSpecialOffersCheckout = sasoCheckout;
                sasoCheckout = function(){
                    if(!special_offers_delay){
                        special_offers_delayed = false;
                        sasoCheckout = saveSpecialOffersCheckout;
                        saveSpecialOffersCheckout();
                    }
                };
                special_offers_delayed = true;
            }
        },
        conditionalDelaySmar7Upsell: function() {
            OrderLogic.delaySmar7Upsell();
            if (smar7_upsell_delayed) {
                smar7_upsell_delay = cartChanged();
            }
        },
        delaySmar7Upsell: function() {
            if (smar7_upsell_delay && !smar7_upsell_delayed) {
                smar7_upsell_callback = function(e){
                    if(!smar7_upsell_delay){
                        smar7_upsell_delayed = false;
                        $(checkoutButtonSelector).off("click");
                        triggerPop(e);
                    }
                };
                smar7_detected = function(){
                    $(checkoutButtonSelector).off("click");
                    $(checkoutButtonSelector).on("click", smar7_upsell_callback);
                    smar7_upsell_delayed = true;
                };
                if (typeof(triggerPop)=="function") {
                    smar7_detected();
                }
                onElementInserted('body', '#bundle-upsell', smar7_detected );
            }
        },
        conditionalDelayCarthook: function() {
            OrderLogic.delayCarthook();
            if (carthook_delayed) {
                carthook_delay = cartChanged();
            }
        },
        delayCarthook: function() {
            if (carthook_delay && !carthook_delayed && typeof(window.react)=="function") {
                saveCarthookReact = window.react;
                window.react = function(e){
                    if(!carthook_delay){
                        carthook_delayed = false;
                        window.react = saveCarthookReact;
                        window.react(e);
                    } else {
                        OrderLogic.checkoutCallback(); // hack inside a hack = yuck!!!
                    }
                };
                carthook_delayed = true;
            }
        },
        conditionalDelayDirectCheckout: function() {
            OrderLogic.delayDirectCheckout();
            if (direct_checkout_delayed) {
                direct_checkout_delay = cartChanged();
            }
        },
        delayDirectCheckout: function() {
            if (direct_checkout_delay && !direct_checkout_delayed && ($(directCheckoutButtonSelector).attr('onclick')=="window.location='/checkout'" || $(directCheckoutButtonSelector).attr('onclick')=="window.location='/checkout/'")) {
                $(directCheckoutButtonSelector)[0].onclick = null;
                $(directCheckoutButtonSelector).attr('onclick','');
                $(directCheckoutButtonSelector).click(function(){
                    if (!direct_checkout_delay) {
                        direct_checkout_delayed = false;
                        window.location='/checkout';
                    } else {
                        OrderLogic.checkoutCallback();
                    }
                });
                direct_checkout_delayed = true;
            }
        },
        conditionalDelayDeliverycheck: function() {
            OrderLogic.delayDeliverycheck();
            if (delivery_check_delayed) {
                delivery_check_delay = cartChanged();
            }
        },
        delayDeliverycheck: function() {
            if (delivery_check_delay && !delivery_check_delayed && typeof(tappingTapirDeliveryCheck)=="function" && typeof(jQuery) !== 'undefined') {
                jQuery(tappingTapirCheckoutSelector).unbind('click');
                jQuery(tappingTapirCheckoutSelector).click(function(){
                    if(!delivery_check_delay){
                        delivery_check_delayed = false;
                        jQuery(tappingTapirCheckoutSelector).unbind('click');
                        jQuery(tappingTapirCheckoutSelector).click(tappingTapirDeliveryCheck);
                        return tappingTapirDeliveryCheck();
                    }
                });
                delivery_check_delayed = true;
            }
        },
        conditionalDelayTermscheck: function() {
            OrderLogic.delayTermscheck();
            if (termscheck_delayed) {
                termscheck_delay = cartChanged();
            }
        },
        delayTermscheck: function() {
            if (termscheck_delay && !termscheck_delayed && typeof(termsCheck)=="function") {
                saveTermsCheck = termsCheck;
                termsCheck = function(){
                    if(!termscheck_delay){
                        termscheck_delayed = false;
                        termsCheck = saveTermsCheck;
                        return saveTermsCheck();
                    } else {
                        return false;
                    }
                };
                termscheck_delayed = true;
            }
        },
        delayAmazonPayment: function() {
            if (amazon_payment_delay && !amazon_payment_delayed) {
                amazonPaymentDetected = function(){
                    saveAmazonButtonHandler = amazonPaymentsButtonHandler.execute;
                    amazonPaymentsButtonHandler.execute = function(e){
                        OrderLogic.checkoutCallback();
                        if(!amazon_payment_delay){
                            amazon_payment_delayed = false;
                            amazonPaymentsButtonHandler.execute = saveAmazonButtonHandler;
                            // saveAmazonButtonHandler(e);
                            $('.amazon-payments-pay-button').children('img').click();
                        }
                    };
                    amazon_payment_delayed = true;
                };
                if (typeof(amazonPaymentsButtonHandler)=="object") {
                    amazonPaymentDetected();
                } else {
                    if (document.readyState != 'loading') {
                        onElementInserted('body', '.amazon-payments-pay-button', amazonPaymentDetected);
                        amazon_payment_delayed = true;
                    } else {
                        $(document).ready(OrderLogic.delayAmazonPayment)
                    }
                }
            }
        },
        conditionalDelayAmazonPayment: function() {
            OrderLogic.delayAmazonPayment();
            if (amazon_payment_delayed) {
                amazon_payment_delay = cartChanged();
            }
        },
        delayCartnote: function() {
            if (cartnote_delay && !cartnote_delayed && typeof(saveCartNoteThenRedirect)=="function") {
                saveCartNote = saveCartNoteThenRedirect;
                saveCartNoteThenRedirect = function(){
                    if(!cartnote_delay){
                        cartnote_delayed = false;
                        saveCartNoteThenRedirect = saveCartNote;
                        saveCartNoteThenRedirect();
                    }
                };
                cartnote_delayed = true;
            }
        },
        conditionalDelayCartnote: function() {
            OrderLogic.delayCartnote();
            if (cartnote_delayed) {
                cartnote_delay = cartChanged();
            }
        },
        delayCheckoutActions: function() {
            if (checkoutactions_delay && !checkoutactions_delayed && typeof(checkoutActions)=="function") {
                saveCheckoutActions = checkoutActions;
                checkoutActions = function(){
                    if(!checkoutactions_delay){
                        checkoutactions_delayed = false;
                        checkoutActions = saveCheckoutActions;
                        saveCheckoutActions();
                    }
                };
                checkoutactions_delayed = true;
            }
        },
        conditionalDelayCheckoutActions: function() {
            OrderLogic.delayCheckoutActions();
            if (checkoutactions_delayed) {
                checkoutactions_delay = cartChanged();
            }
        },
        conditionalDelays: function(){
            OrderLogic.conditionalDelayUpsell();
            OrderLogic.conditionalDelayRecurringOrders();
            OrderLogic.conditionalDelayCartnote();
            OrderLogic.conditionalDelayTermscheck();
            OrderLogic.conditionalDelayDirectCheckout();
            OrderLogic.conditionalDelayDeliverycheck();
            OrderLogic.conditionalDelayCheckoutActions();
            OrderLogic.conditionalDelaySmar7Upsell();
            OrderLogic.conditionalDelayAmazonPayment();
            OrderLogic.conditionalDelayCarthook();
            OrderLogic.conditionalDelaySpecialOffers();
            OrderLogic.conditionalDelayQuantityBreaks();
            OrderLogic.conditionalDelayHulkApps();
        },
        directDelays: function(){
            OrderLogic.delayUpsell();
            OrderLogic.delayRecurringOrders();
            OrderLogic.delayCartnote();
            OrderLogic.delayTermscheck();
            OrderLogic.delayDirectCheckout();
            OrderLogic.delayDeliverycheck();
            OrderLogic.delayCheckoutActions();
            OrderLogic.delaySmar7Upsell();
            OrderLogic.delayAmazonPayment();
            OrderLogic.delayCarthook();
            OrderLogic.delaySpecialOffers();
            OrderLogic.delayQuantityBreaks();
            OrderLogic.delayHulkApps();
        },
        cartUpdateTrigger: function() {
            if ((Shopify.theme.id != 171190413 && Shopify.theme.id != 164725251 && Shopify.theme.id != 163162765 && Shopify.theme.id != 169797962 && Shopify.theme.id != 188767181 && Shopify.theme.id != 3655761948 && Shopify.theme.id != 170542484  && Shopify.theme.id != 18060804139 && Shopify.theme.id != 79691397 && Shopify.theme.id != 21228388396 && Shopify.theme.id != 77708934 && Shopify.theme.id != 162224461  && Shopify.theme.id != 112678568097) || (Shopify.theme.id == 170542484 && location.pathname != "/cart")) {
                ajaxCartUpdate = true;
            } else {
                setOriginalCart();
            }

            if (ajaxCartUpdate) {
                setTimeout(function() {
                    OrderLogic.verifyProductAmounts();
                }, 500);
            }
        },
        verifyProductAmounts: function() {
            if (ol_current_state != OL_STATES.UNKNOWN) {
                OrderLogic.setState(OL_STATES.CHECKING);
            }
            // Cart was not up to date for this store when fetching it on a cart change, so need to put a slight delay in here
            if (Shopify.shop == 'dev-nassauelectrical.myshopify.com') {
                setTimeout(function() {
                    $.ajax({
                        method: 'GET',
                        url: '/cart.js?internal',
                        dataType: 'JSON',
                        async: true
                    }).done(OrderLogic.attachConditionActions).fail(function( jqXHR, textStatus ) {
                        // TODO: create failure endpoints for these so we can get insight into what is happening
                        // again, is this necessary?
                        console.log("Fail on fetching cart.js - " + textStatus);
                    });
                }, 100)
            } else {
                $.ajax({
                    method: 'GET',
                    url: '/cart.js?internal',
                    dataType: 'JSON',
                    async: true
                }).done(OrderLogic.attachConditionActions).fail(function( jqXHR, textStatus ) {
                    // TODO: create failure endpoints for these so we can get insight into what is happening
                    // again, is this necessary?
                    console.log("Fail on fetching cart.js - " + textStatus);
                });
            }
        },
        attachConditionActions: function (cartData) {

            cartData = typeof cartData !== 'undefined' ? cartData : OrderLogic.cartData;
            // save the current cartData for next time
            OrderLogic.cartData = cartData;
            // check the count of products in cart, if 1 or more fetch product conditions
            if (cartData.item_count > 0) {
                OrderLogic.loadMissingTagData(cartData);

                if (typeof OrderLogic.attachConditionActions.productConditions == 'undefined') {
                    var productConditions = {};
                    if (typeof olConstraints == "undefined") {
                        OrderLogic.attachConditionActions.productConditions = 'loading';
                        var urlS3 = 'https://s3.us-east-2.amazonaws.com/orderlogic-' + (ol_hostname == 'www.orderlogicapp.com' ? 'production' : 'development') + '/' + Shopify.shop.split('.')[0] + '_constraints.js?' + ol_cachebuster;
                        var urlOrderLogic = 'https://' + ol_hostname + '/shops/constraints.js' + "?shop=" + Shopify.shop;
                        var failureOrderLogic = function() {
                            delete OrderLogic.attachConditionActions.productConditions;
                            console.log("Fail - couldn't load constraints");
                        }
                        var success = function() {
                            if (typeof olConstraints == "object") {
                                setMessages(olConstraints.messages);
                                productConditions = olConstraints;
                                OrderLogic.attachConditionActions.productConditions = olConstraints;
                                OrderLogic.addEncryptedDebuggingMetaDataOnOrder();
                                OrderLogic.inspectProductConditions(productConditions, cartData);
                            } else {
                                failure();
                            }
                        }
                        var failureS3 = function() {
                            if (typeof olConstraints == "undefined") {
                                olLoadScript(urlOrderLogic, success, failureOrderLogic);
                            }
                        }
                        olLoadScript(urlS3, success, failureS3);
                    } else {
                        productConditions = olConstraints;
                    }
                    if (Object.keys(productConditions).length > 0) {
                        setMessages(productConditions.messages);
                        OrderLogic.attachConditionActions.productConditions = productConditions;
                        OrderLogic.inspectProductConditions(productConditions, cartData);
                    }
                } else {
                    OrderLogic.inspectProductConditions(OrderLogic.attachConditionActions.productConditions, cartData);
                }
            } else {
                OrderLogic.setState(OL_STATES.PASS)
                OrderLogic.setAlerted([]);
            }
        },
        checkoutCallback: function(e,clicked_element) {
            clicked_element = clicked_element || this;
            checkout_ok = true;
            if( typeof olBypassAlert != "undefined" ) {
                return checkout_ok;
            }

            if (OrderLogic.inspectProductConditions.errors_detected) {
                checkout_ok = false
                if (typeof(e) != 'undefined') {
                    e.preventDefault();
                }
                identifyClicks(clicked_element);
                OrderLogic.directDelays();
                if (!cartChanged()) {
                    OrderLogic.inspectProductConditions.initAndNotifyUsers();
                }
            } else {
                identifyClicks(clicked_element);
                OrderLogic.conditionalDelays();
                checkout_ok = !cartChanged();
                if (typeof(e) != 'undefined' && !checkout_ok) {
                    e.preventDefault();
                }
            }
            return checkout_ok;
        },
        monitoredTagsInCart: function(productConditions) {
            var monitoredTags = [];
            if (typeof productConditions.tag_constraints == "object") {
                cart_tags = Object.keys(OrderLogic.productsMetadata);
                monitoredTags = cart_tags.filter(function(tag) { return typeof productConditions.tag_constraints[tag] == "object"});
            }
            return monitoredTags;
        },
        checkIndividualTagLimits: function(errors, product, productQuantities, tag_constraints) {
            // for each tag on product
            var tags = [];
            if (typeof(olProductData) == "object" && typeof(olProductData[product.product_id]) == "object") {
                tags = olProductData[product.product_id].tags
            }
            var item;
            tags.forEach(function(tag){
                // for each individual limit on tag
                if (typeof(tag_constraints[tag.toLowerCase()]) == "object" && typeof(tag_constraints[tag.toLowerCase()]['individual']) == "object" && tag_constraints[tag.toLowerCase()]['individual'].length > 0) {
                    // run through and check each limit
                    var individual_constraints = tag_constraints[tag.toLowerCase()]['individual'];
                    for(var i = 0; i < individual_constraints.length; i++) {
                        var constraint = individual_constraints[i];
                        var limit = {amount: constraint.amount, product: {title: product.product_title}, product_id: product.product_id, type: constraint.constraint, variant_count: olProductData[product.product_id].variant_count};
                        // setup error and item if an error is found. Update item only if it is not currently a multiple
                        switch(limit.type) {
                            case 'minimum':
                                if (parseInt(constraint.amount) > productQuantities[product.product_id]) {
                                    errors[product.product_id] = OrderLogic.createOrAddToObject(errors[product.product_id], limit.type, limit);
                                    if (typeof item == "undefined") {
                                        item = limit;
                                    }
                                }
                                break;
                            case 'maximum':
                                if (parseInt(constraint.amount) < productQuantities[product.product_id]) {
                                    errors[product.product_id] = OrderLogic.createOrAddToObject(errors[product.product_id], limit.type, limit);
                                    if (typeof item == "undefined") {
                                        item = limit;
                                    }
                                }
                                break;
                            case 'multiple':
                                if (productQuantities[product.product_id] % parseInt(constraint.amount) != 0) {
                                    errors[product.product_id] = OrderLogic.createOrAddToObject(errors[product.product_id], limit.type, limit);
                                    item = limit;
                                }
                                break;
                        }
                    }
                }

            });

            return item;

        },
        checkCollectiveTagLimits: function(productQuantities, productSpends, tag_constraints, errors) {
            // sum quantity per tag
            var tag_sums = {};
            var product_ids = Object.keys(productQuantities);
            if (typeof(olProductData) == "object") {
                for(var i = 0; i < product_ids.length; i++) {
                    var product_id = product_ids[i];
                    if (typeof(olProductData[product_id]) == "object") {
                        var tags = olProductData[product_id]['tags'];
                        if (typeof(tags) == "object") {
                            for(var j = 0; j < tags.length; j++) {
                                var tag = tags[j].toLowerCase();
                                tag_sums[tag] = tag_sums[tag] + productQuantities[product_id] || productQuantities[product_id];
                            }
                        }
                    }
                }
            }

            var tagSpends = {}
            var productSpendIds = Object.keys(productSpends);
            if (typeof(olProductData) == "object") {
                productSpendIds.forEach(function(productId) {
                    if (typeof(olProductData[productId]) == "object") {
                        var tags = olProductData[productId]['tags'];
                        if (typeof(tags) == "object") {
                            tags.forEach(function(tag) {
                                tag = tag.toLowerCase();
                                tagSpends[tag] = tagSpends[tag] + productSpends[productId] || productSpends[productId]
                            });
                        }
                    }
                });
            }

            var seenTags = {}
            var all_tags = Object.keys(tag_sums).concat(Object.keys(tagSpends));

            for(var i = 0; i < all_tags.length; i++) {
                var tag = all_tags[i].toLowerCase();

                if (seenTags[tag]) { continue; }
                seenTags[tag] = true;

                // check for collective limits
                var tag_limits = tag_constraints[tag];
                if (typeof(tag_limits) == "object") {
                    collective_limits = tag_limits['collective'];
                    for(var j = 0; j < collective_limits.length; j++) {
                        var limit = collective_limits[j];
                        // generate errors for each violation
                        switch(limit.constraint) {
                            case 'minimum':
                                if (tag_sums[tag] && parseInt(limit.amount) > tag_sums[tag]) {
                                    errors['collective_tags'] = OrderLogic.createOrAddToObject(errors['collective_tags'], tag+'_'+j, limit);
                                }
                                break;
                            case 'maximum':
                                if (tag_sums[tag] && parseInt(limit.amount) < tag_sums[tag]) {
                                    errors['collective_tags'] = OrderLogic.createOrAddToObject(errors['collective_tags'], tag+'_'+j, limit);
                                }
                                break;
                            case 'multiple':
                                if (tag_sums[tag] && tag_sums[tag] % parseInt(limit.amount) != 0) {
                                    errors['collective_tags'] = OrderLogic.createOrAddToObject(errors['collective_tags'], tag+'_'+j, limit);
                                }
                                break;
                            case 'minimum_spend':
                                if (tagSpends[tag] && tagSpends[tag] < parseInt(limit.amount)) {
                                    errors['collective_tags'] = OrderLogic.createOrAddToObject(errors['collective_tags'], tag + '_' + j, limit);
                                }
                                break;
                            case 'maximum_spend':
                                if (tagSpends[tag] && tagSpends[tag] > parseInt(limit.amount)) {
                                    errors['collective_tags'] = OrderLogic.createOrAddToObject(errors['collective_tags'], tag + '_' + j, limit);
                                }
                                break;
                        }
                    }
                }
            }
        },
        inspectProductConditions: function(productConditions, cartData) {
            //hack attempt at fixing a rare case where originalCartItems does not init properly
            if (Object.keys(originalCartItems).length == 0) {
                originalCartItems = getCartItems();
            }

            var errors = {};
            var productQuantities = {};
            var productSpends = {}
            var orderMin = productConditions["order_min_amount"];
            var orderMax = productConditions["order_max_amount"];
            var orderMinQuantity = productConditions["order_min_quantity"];
            var orderMaxQuantity = productConditions["order_max_quantity"];
            var cartTotalPrice = typeof(BOLD)=="undefined" || typeof(BOLD.common)=="undefined" || typeof(BOLD.common.cartDoctor)=="undefined" || typeof(BOLD.common.cartDoctor.fix)=="undefined" ? cartData.total_price : BOLD.common.cartDoctor.fix(cartData).total_price;
            var monitoredTags = OrderLogic.monitoredTagsInCart(productConditions);

            OrderLogic.inspectProductConditions.initAndNotifyUsers = function() {
                OrderLogic["lastErrors"] = errors;
                OrderLogic.notifyUser(errors);
            };

            amazon_payment_delay = true;
            OrderLogic.delayAmazonPayment();
            if ((location.pathname != "/cart" && (location.pathname != "/pages/confirm" || Shopify.theme.id != 21228388396)) || ajaxCartUpdate) {
                setTimeout(function() { setOriginalCart(); }, 500); // UI elements aren't updated yet
            }
            OrderLogic.inspectProductConditions.monitored_item_in_cart = false;
            if (typeof orderMin != "undefined" || typeof orderMax != "undefined" || orderMinQuantity != null || orderMaxQuantity != null || monitoredTags.length > 0) {
                OrderLogic.inspectProductConditions.monitored_item_in_cart = true;
            }
            if (cartTotalPrice < orderMin) {
                errors["store"] = OrderLogic.createOrAddToObject(errors["store"], "min_price_violation", orderMin);
            }

            if (cartTotalPrice > orderMax) {
                errors["store"] = OrderLogic.createOrAddToObject(errors["store"], "max_price_violation", orderMax);
            }

            if (orderMinQuantity != null && cartData.item_count < orderMinQuantity) {
                errors["store"] = OrderLogic.createOrAddToObject(errors["store"], "min_quantity_violation", orderMinQuantity);
            }

            if (orderMaxQuantity != null && cartData.item_count > orderMaxQuantity) {
                errors["store"] = OrderLogic.createOrAddToObject(errors["store"], "max_quantity_violation", orderMaxQuantity);
            }

            // sum quantities of each variant of each product
            // TODO - need to get total amounts for each product too, maybe generate a new object for that productSpends
            cartData.items.forEach(function(product) {
                if (typeof productQuantities[product.product_id] == "undefined") {
                    productQuantities[product.product_id] = product.quantity;
                } else {
                    productQuantities[product.product_id] += product.quantity;
                }
                if (typeof productSpends[product.product_id] == "undefined") {
                    productSpends[product.product_id] = product.final_line_price;
                } else {
                    productSpends[product.product_id] += product.final_line_price;
                }
            });

            if (monitoredTags.length > 0) {
                OrderLogic.checkCollectiveTagLimits(productQuantities, productSpends, productConditions['tag_constraints'], errors);
            }

            errors["fixable"] = true;
            cartData.items.forEach(function(product) {
                var minimum = productConditions[product.product_id + "_minimum"];
                var maximum = productConditions[product.product_id + "_maximum"];
                var multiple = productConditions[product.product_id + "_multiple"];

                if (typeof minimum != "undefined" || typeof maximum != "undefined" || typeof multiple != "undefined") {
                    OrderLogic.inspectProductConditions.monitored_item_in_cart = true;
                }
                if(typeof minimum != "undefined" && minimum['amount'] > productQuantities[product.product_id]) {
                    errors[product.product_id] = OrderLogic.createOrAddToObject(errors[product.product_id], "minimum", minimum);
                    var item = minimum;
                }
                if(typeof maximum != "undefined" && maximum['amount'] < productQuantities[product.product_id]) {
                    errors[product.product_id] = OrderLogic.createOrAddToObject(errors[product.product_id], "maximum", maximum);
                    var item = maximum;
                }
                if(typeof multiple != "undefined" && productQuantities[product.product_id] % multiple['amount'] != 0 ) {
                    // TODO - look at this logic and see if it fits, not sure about the variant count stuff and the multiples
                    errors[product.product_id] = OrderLogic.createOrAddToObject(errors[product.product_id], "multiple", multiple);
                    var item = multiple;
                }
                if (monitoredTags.length > 0) {
                    var tag_item = OrderLogic.checkIndividualTagLimits(errors, product, productQuantities, productConditions['tag_constraints']);
                    if (typeof item == "undefined" || (item.type != "multiple") && (typeof tag_item != "undefined")) {
                        var item = tag_item;
                    }
                }

                if (typeof item == "undefined") {
                    return;
                }

                if (typeof errors[product.product_id] == "undefined" || (item.variant_count > 1 && !(item.type=="maximum" && productQuantities[product.product_id] == product.quantity)) || item.type == "multiple") {
                    errors["fixable"] = false;
                } else {
                    errors[product.product_id]["variant_id"] = product.variant_id;
                }

                if (typeof errors[product.product_id]["SKUs_list"] == "undefined" ) {
                    errors[product.product_id]["SKUs_list"] = [product.sku]
                } else {
                    errors[product.product_id]["SKUs_list"].push(product.sku)
                }
            });
            if (($.inArray('store', Object.keys(errors)) > -1) || ($.inArray('collective_tags', Object.keys(errors)) > -1) || Shopify.shop == "faradite.myshopify.com" || Shopify.shop == "jeff-hobrath-art-studio.myshopify.com"){
                errors["fixable"] = false;
            }
            // errors["fixable"] will always be in the object, so > 1 will tell us if there are actually errors
            if(Object.keys(errors).length > 1) {
                OrderLogic.setState(OL_STATES.BLOCK);
                // always notify immediately if cart has product not alerted for
                if(OrderLogic.cartHasLimitViolationsNotAlerted(errors) && Shopify.shop != "lead-apparel.myshopify.com" && Shopify.shop != "jus-dorange-pro.myshopify.com" && Shopify.shop != "pewtergraphics.myshopify.com") {
                    OrderLogic.inspectProductConditions.initAndNotifyUsers();
                }

                if (( typeof OrderLogic.inspectProductConditions.errors_detected == 'undefined') || OrderLogic.inspectProductConditions.errors_detected == false) {
                    direct_checkout_delay = true;
                    OrderLogic.delayDirectCheckout();
                    delivery_check_delay = true;
                    OrderLogic.delayDeliverycheck();
                    checkoutactions_delay = true;
                    OrderLogic.delayCheckoutActions();
                    smar7_upsell_delay = true;
                    OrderLogic.delaySmar7Upsell();
                    cartnote_delay = true;
                    OrderLogic.delayCartnote();
                    carthook_delay = true;
                    OrderLogic.delayCarthook();
                    special_offers_delay = true;
                    OrderLogic.delaySpecialOffers();
                    quantity_breaks_delay = true;
                    OrderLogic.delayQuantityBreaks();
                    hulkapps_delay = true;
                    OrderLogic.delayHulkApps();
                    recurring_orders_delay = true;
                    OrderLogic.delayRecurringOrders();

                    // and also check on cart submission to verify that nothing has slipped through
                    if ( typeof OrderLogic.inspectProductConditions.errors_detected == 'undefined') {
                        OrderLogic.inspectProductConditions.errors_detected = true;
                        $(document).on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
                        if (Shopify.theme.theme_store_id == 765) {
                            $('form').on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
                        }
                        $('.grid__item').on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
                        if (Shopify.theme.id == 161904262 || Shopify.theme.id == 41373728858 || Shopify.theme.theme_store_id == 566) {
                            $("[href='/checkout']").on('click.olEvents', OrderLogic.checkoutCallback);
                        }
                        if (Shopify.theme.id == 41373728858) {
                            // ajax cart is dynamically added on this theme
                            onElementInserted('.cart-mini-footer', '.cart-mini-actions', function(){$("[href='/checkout']").on('click.olEvents', OrderLogic.checkoutCallback);})
                        }
                    }
                    OrderLogic.inspectProductConditions.errors_detected = true;
                } else if (direct_checkout_delay == true && delivery_check_delayed == false) {
                    OrderLogic.delayDirectCheckout();
                }

            } else {
                if (( typeof OrderLogic.inspectProductConditions.errors_detected == 'undefined') || OrderLogic.inspectProductConditions.errors_detected == true) {

                    if ( typeof OrderLogic.inspectProductConditions.errors_detected == 'undefined') {
                        OrderLogic.inspectProductConditions.errors_detected = false;
                        $(document).on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
                        if (Shopify.theme.theme_store_id == 765) {
                            $('form').on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
                        }
                        $('.grid__item').on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
                        if (Shopify.theme.id == 161904262 || Shopify.theme.id == 41373728858 || Shopify.theme.theme_store_id == 566) {
                            $("[href='/checkout']").on('click.olEvents', OrderLogic.checkoutCallback);
                        }
                        if (Shopify.theme.id == 41373728858) {
                            // ajax cart is dynamically added on this theme
                            onElementInserted('.cart-mini-footer', '.cart-mini-actions', function(){$("[href='/checkout']").on('click.olEvents', OrderLogic.checkoutCallback);})
                        }
                    }
                    OrderLogic.inspectProductConditions.errors_detected = false;
                }

                if (OrderLogic.inspectProductConditions.errors_detected == false) {
                    if (ol_current_state != OL_STATES.UNKNOWN) {
                        OrderLogic.setState(OL_STATES.PASS);
                    }
                    amazon_payment_delay = false;
                }
            }
        },
        checkProductTagLimits: function(productTags, productConditions){
          var tagConstraints = productConditions['tag_constraints'];
          productTags.forEach(function(tag){
            if(typeof tagConstraints[tag.toLowerCase()] != 'undefined'){
              $(olDynamicCheckoutButtonSelector).hide();
            }
          })
        },
        fetchProductDataAndHideDynamicCheckoutBtn: function(handle, productConditions) {
            $.getJSON('/products/' + handle + '.json', function(data) {
              var productId = data.product.id;
              var productTags = data.product.tags.split(", ");
              var minimum = productConditions[productId + "_minimum"];
              var maximum = productConditions[productId+ "_maximum"];
              var multiple = productConditions[productId + "_multiple"];
              var orderMin = productConditions["order_min_amount"];
              var orderMax = productConditions["order_max_amount"];
              var orderMinQuantity = productConditions["order_min_quantity"];
              var orderMaxQuantity = productConditions["order_max_quantity"];
              if(typeof minimum != "undefined" || typeof maximum != "undefined" || typeof multiple != "undefined" || typeof orderMin != "undefined" || typeof orderMax != "undefined" || orderMinQuantity != null || orderMaxQuantity != null){
                $(olDynamicCheckoutButtonSelector).hide();
              }else {
                if(typeof productTags != "undefined" && productTags.length > 0){
                  OrderLogic.checkProductTagLimits(productTags, productConditions);
                }
              }
            });
        },
        hideDynamicCheckoutBtn: function(productConditions){
          var minimum = productConditions[olProductDataDcb.productId + "_minimum"];
          var maximum = productConditions[olProductDataDcb.productId + "_maximum"];
          var multiple = productConditions[olProductDataDcb.productId + "_multiple"];
          var orderMin = productConditions["order_min_amount"];
          var orderMax = productConditions["order_max_amount"];
          var orderMinQuantity = productConditions["order_min_quantity"];
          var orderMaxQuantity = productConditions["order_max_quantity"];
          var productTags = olProductDataDcb.tags;
          if(typeof minimum != "undefined" || typeof maximum != "undefined" || typeof multiple != "undefined" || typeof orderMin != "undefined" || typeof orderMax != "undefined" || orderMinQuantity != null || orderMaxQuantity != null){
            $(olDynamicCheckoutButtonSelector).hide();
          }else {
            if(typeof productTags != "undefined" && productTags.length > 0){
              OrderLogic.checkProductTagLimits(productTags, productConditions);
            }
          }
        },
        hideDynamicCheckoutBtnOnProductPage: function(productConditions){
            if(typeof olProductDataDcb == "object"){
              OrderLogic.hideDynamicCheckoutBtn(productConditions);
            }else {
              var currentURL = window.location.href
              var handle = currentURL.split('/products/').pop();
              OrderLogic.fetchProductDataAndHideDynamicCheckoutBtn(handle, productConditions);
            }
        },
        hideOutDynamicCheckoutButtons: function(){
            if(typeof olBypassAlert == "undefined"){
              var currentURL = window.location.href
              productConditions = olConstraints;
              var hideDynamicCheckoutButton = productConditions["hide_dynamic_checkout_button"];
              if(hideDynamicCheckoutButton != false){
                if(currentURL.includes("/products") == false && Object.keys(productConditions).length > 0){
                  $(olDynamicCheckoutButtonSelector).hide();
                }
                if(currentURL.includes("/products") == true && Object.keys(productConditions).length > 0){
                  OrderLogic.hideDynamicCheckoutBtnOnProductPage(productConditions);
                }
              }
            }
        },
        encodeMetaData: function(baseString){
          var encodedString = window.btoa(baseString);
          return encodedString;
        },
        addEncryptedDebuggingMetaDataOnOrder: function(){
            if(olConstraints["cart_metadata"] == true){
              orderMetaData = {}
              orderMetaData["userAgent"] = navigator.userAgent;
              metadata_string =  OrderLogic.encodeMetaData(JSON.stringify(orderMetaData));
              $(document).ready(
                $.post('/cart/update.js', "attributes[__olDebug]=" + metadata_string)
              );
            }
        },
        emitCartChanges: async function() {
            const event = new CustomEvent("ol_cart_changed")
            window.dispatchEvent(event)
        },
        observeCartChanges: function() {
            const cartObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                const isValidRequestType = ['xmlhttprequest', 'fetch'].includes(entry.initiatorType);
                const isCartChangeRequest = /\/cart\//.test(entry.name);
                if (isValidRequestType && isCartChangeRequest) {
                  this.emitCartChanges();
                }
              });
            });
            cartObserver.observe({ entryTypes: ["resource"] });
        },
        init: function() {
            // this listens for ajax cart changes, probably would be good to clean up the cart change event logic above some day and merge with this
            // 
            // the issue is that fetching the cart doesn't have anything in it (it hasn't been updated yet), which might have to do with the weird cart fetch override logic
            // above 
            OrderLogic.emitCartChanges().then(() => {
                OrderLogic.observeCartChanges();
            })
            window.addEventListener("ol_cart_changed", e => {
                OrderLogic.verifyProductAmounts()
            })

            OrderLogic.setState(OL_STATES.LOADING);
            OrderLogic.processMetadata();
            if (Shopify.shop == "blush-and-bar.myshopify.com" || Shopify.shop == "sofit-gear.myshopify.com" || Shopify.shop == "pistils-nursery.myshopify.com" || Shopify.shop == "shane-todd-gifts-uk.myshopify.com" || Shopify.shop == "gobears.myshopify.com" || Shopify.shop == "airplantcity.myshopify.com" || Shopify.shop == "airplantsupplyco.myshopify.com" || Shopify.shop == "air-plant-shop.myshopify.com" || Shopify.shop == "yin-yam-asian-grocery.myshopify.com") {
                olLoadScript('//cdn.jsdelivr.net/npm/promise-polyfill@7.1.0/dist/promise.min.js');
                olLoadStyle('//cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.24.4/sweetalert2.min.css');
                olLoadScript('//cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.24.4/sweetalert2.min.js');
            } else {
                olLoadStyle('//cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css');
                olLoadScript('//cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js');
            }

            var url = 'https://s3.us-east-2.amazonaws.com/orderlogic-' + (ol_hostname == 'www.orderlogicapp.com' ? 'production' : 'development') + '/' + Shopify.shop.split('.')[0] + '_constraints.js?' + ol_cachebuster;
            var failure = function(){
                olLoadScript('https://' + ol_hostname + '/shops/constraints.js' + "?shop=" + Shopify.shop, OrderLogic.hideOutDynamicCheckoutButtons);
            }

            olLoadScript(url, OrderLogic.hideOutDynamicCheckoutButtons, failure);

            $(document).ready(onElementInserted('body', '.cart-form', OrderLogic.showHideAdditionalCheckoutButtons));
            $(document).ready(onElementInserted('body', additionalCheckoutSelector, OrderLogic.showHideAdditionalCheckoutButtons));
            $(document).ready(function(){
                $(document).on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
              });
            $(document).ready(
              onElementInserted(
                'body', '.qikify-stickycart-app',
                function(){
                    $(document).on('click.olEvents', olCheckoutButtonSelector, OrderLogic.checkoutCallback);
                  }
                )
              );
            OrderLogic.verifyProductAmounts();
            window.customCheckoutValidation = function(submit_button, callback) {
                submit_button = submit_button || "[name=checkout]";
                callback(OrderLogic.checkoutCallback(undefined,submit_button))
            };
            if (typeof Spurit == "object") {
                Spurit.globalOnLoad = function(){
                    Spurit.global.checkout.onCheckout(function(next){
                        next(OrderLogic.checkoutCallback());
                    });
                }
            }
        }
    };
    OrderLogic.init();
    document.addEventListener("theme:loading:start", OrderLogic.cartUpdateTrigger);
    document.addEventListener("theme:loading:end", OrderLogic.cartUpdateTrigger);
    // $(document).on("addToCart", OrderLogic.cartUpdateTrigger);
    $(document).on("cartchanged", OrderLogic.cartUpdateTrigger);
    $(document).on("cartloaded", function() {
        if ($.isEmptyObject(originalCartItems)) {
            setOriginalCart();
        }
        setTimeout(function() {
            OrderLogic.verifyProductAmounts();
        }, 500);
    });
    // $(document).on("olStateChanged", function(){
    //   console.log("Current State Changed: " + ol_current_state.description);
    // });

    function onElementInserted(containerSelector, elementSelector, callback) {

        var onMutationsObserved = function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    var elements = $(mutation.addedNodes).filter(elementSelector);
                    for (var i = 0, len = elements.length; i < len; i++) {
                        callback(elements[i]);
                    }
                }
            });
        };

        $(function(){
            var target = $(containerSelector)[0];
            var config = { childList: true, subtree: true };
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            if (typeof MutationObserver != "undefined") { // silent fail on IE 10 and earlier, or other early browsers without mutation observers
                var observer = new MutationObserver(onMutationsObserved);
                observer.observe(target, config);
            }
        });
    }

};

function compareVersions(installed, required) {

    var a = installed.split('.');
    var b = required.split('.');

    for (var i = 0; i < a.length; ++i) {
        a[i] = Number(a[i]);
    }
    for (var i = 0; i < b.length; ++i) {
        b[i] = Number(b[i]);
    }
    if (a.length == 2) {
        a[2] = 0;
    }

    if (a[0] > b[0]) return true;
    if (a[0] < b[0]) return false;

    if (a[1] > b[1]) return true;
    if (a[1] < b[1]) return false;

    if (a[2] > b[2]) return true;
    if (a[2] < b[2]) return false;

    return true;
}

// freshalb has a currency app that isn't using jquery on the page, it's just loading up it's own jquery, and is causing issues, so how do we deal with that? MORE JQUERYs!
if ((typeof jQuery === 'undefined') || !compareVersions(jQuery.fn.jquery, '1.7') || Shopify.shop == "freshalb.myshopify.com" || Shopify.shop == "test546715695.myshopify.com" || Shopify.shop == "plantessentials.myshopify.com" || Shopify.shop == "maighandistribution.myshopify.com" || Shopify.shop == "maighandistributionusa.myshopify.com") {
    olLoadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function(){
        jQuery191 = jQuery.noConflict(true);
        orderLogicJavaScript(jQuery191);
    });
} else {
    orderLogicJavaScript(jQuery);
}

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
