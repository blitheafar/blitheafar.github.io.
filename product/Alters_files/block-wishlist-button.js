const main = async () => {
  const { default: loader, appSettings } = await import(window.WishlistKingAppLoaderURL);

  loader.load({
    name: 'wishlist-button-block',
    type: 'lit-component',
    url: appSettings.assets.componentWishlistButtonBlockJs,
  });
};

if (window.WishlistKingAppLoaderURL) {
  main();
}

