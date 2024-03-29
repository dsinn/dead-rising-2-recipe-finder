self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'images/Apple.webp',
                'images/BBQChicken.webp',
                'images/BBQRibs.webp',
                'images/Bacon.webp',
                'images/BakedPotato.webp',
                'images/Beans.webp',
                'images/Beer.webp',
                'images/Brownie.webp',
                'images/Burrito.webp',
                'images/Cake.webp',
                'images/Chili.webp',
                'images/Coffee.webp',
                'images/CoffeeCreamer.webp',
                'images/Cookies.webp',
                'images/CookingOil.webp',
                'images/Donuts.webp',
                'images/DrinkCocktail.webp',
                'images/Energizer.webp',
                'images/Fish.webp',
                'images/Fries.webp',
                'images/Hamburger.webp',
                'images/HotDog.webp',
                'images/IceCream.webp',
                'images/Jellybeans.webp',
                'images/Ketchup.webp',
                'images/LargeSoda.webp',
                'images/Lobster.webp',
                'images/Mayonnaise.webp',
                'images/Melon.webp',
                'images/Milk.webp',
                'images/Mustard.webp',
                'images/Nectar.webp',
                'images/OnionRing.webp',
                'images/OrangeJuice.webp',
                'images/PainKiller.webp',
                'images/Pasta.webp',
                'images/Pie.webp',
                'images/Pineapple.webp',
                'images/Pizza.webp',
                'images/QuickStep.webp',
                'images/Randomizer.webp',
                'images/Repulse.webp',
                'images/Snack.webp',
                'images/Spitfire.webp',
                'images/SpoiledBBQChicken.webp',
                'images/SpoiledBBQRibs.webp',
                'images/SpoiledBacon.webp',
                'images/SpoiledFish.webp',
                'images/SpoiledHamburger.webp',
                'images/SpoiledHotDog.webp',
                'images/SpoiledLobster.webp',
                'images/SpoiledSteak.webp',
                'images/SpoiledSushi.webp',
                'images/Steak.webp',
                'images/Sushi.webp',
                'images/Taco.webp',
                'images/Untouchable.webp',
                'images/Vodka.webp',
                'images/Whiskey.webp',
                'images/Wine.webp',
                'images/Zombait.webp'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(
            function (response) {
                return response || fetch(e.request);
            }
        )
    );
});
