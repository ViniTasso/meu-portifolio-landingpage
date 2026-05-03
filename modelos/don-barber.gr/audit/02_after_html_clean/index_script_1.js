/**
 * Fetch/XHR Interceptor - Injected into downloaded sites to resolve remote URLs locally.
 *
 * This script is loaded as a template. Python replaces the placeholder comment below
 * with the actual resource map code before injecting into the page <head>.
 *
 * Placeholder: /* __RESOURCE_MAP_CODE__ * /
 */
(async function() {
    const resourceMap = {"https://don-barber.gr/en/": "assets/en.html", "https://consent.cookiebot.com/uc.js": "assets/consent.cookiebot.com/uc.js", "https://don-barber.gr/wp-content/themes/don/styles/css/main.v.1.0.6.css": "assets/wp-content/themes/don/styles/css/main.v.1.0.6.css", "https://consentcdn.cookiebot.com/consentconfig/c9a36ae9-1808-43fe-930f-9f19e159b265/settings.json": "assets/settings_a620a057e17f.json", "https://consentcdn.cookiebot.com/consentconfig/c9a36ae9-1808-43fe-930f-9f19e159b265/don-barber.gr/configuration.js": "assets/consentconfig/c9a36ae9-1808-43fe-930f-9f19e159b265/don-barber.gr/configuration.js", "https://consentcdn.cookiebot.com/sdk/bc-v4.min.html": "assets/sdk/bc-v4.min.html", "https://consent.cookiebot.com/c9a36ae9-1808-43fe-930f-9f19e159b265/cc.js?renew=false&referer=don-barber.gr&dnt=false&init=false&culture=EN": "assets/cc_37d5f7c1f721.js", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-mega-menu-services-banner.jpg": "assets/wp-content/uploads/don-barber-and-groom-mega-menu-services-banner.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-entrance-exterior.jpg": "assets/wp-content/uploads/don-barber-and-groom-entrance-exterior.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-service-barbering.jpg": "assets/wp-content/uploads/don-barber-and-groom-service-barbering.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-services-wellness.jpg": "assets/wp-content/uploads/don-barber-and-groom-services-wellness.jpg", "https://don-barber.gr/wp-includes/css/classic-themes.min.css": "assets/wp-includes/css/classic-themes.min.css", "https://don-barber.gr/wp-content/plugins/contact-form-7/includes/css/styles.css": "assets/wp-content/plugins/contact-form-7/includes/css/styles.css", "https://don-barber.gr/wp-content/plugins/sitepress-multilingual-cms/templates/language-switchers/legacy-list-horizontal/style.min.css": "assets/wp-content/plugins/sitepress-multilingual-cms/templates/language-switchers/legacy-list-horizontal/style.min.css", "https://don-barber.gr/wp-content/themes/don/js/CustomEase.min.js": "assets/wp-content/themes/don/js/CustomEase.min.js", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-service-hand-and-feet.jpg": "assets/wp-content/uploads/don-barber-and-groom-service-hand-and-feet.jpg", "https://don-barber.gr/wp-content/uploads/picture-449x613-04.png": "assets/wp-content/uploads/picture-449x613-04.png", "https://don-barber.gr/wp-content/uploads/1-%CE%99%CE%A9%CE%91%CE%9D%CE%9D%CE%97%CE%A3-%CE%A3%CE%91%CE%9A%CE%95%CE%9B%CE%9B%CE%91%CE%A1%CE%91%CE%9A%CE%97%CE%A3-OWNER-MASTER-BARBER-2.jpg": "assets/wp-content/uploads/1-ΙΩΑΝΝΗΣ-ΣΑΚΕΛΛΑΡΑΚΗΣ-OWNER-MASTER-BARBER-2.jpg", "https://don-barber.gr/wp-content/uploads/kerastase-logo.png": "assets/wp-content/uploads/kerastase-logo.png", "https://don-barber.gr/wp-content/uploads/reuzel-logo.png": "assets/wp-content/uploads/reuzel-logo.png", "https://don-barber.gr/wp-content/uploads/Label-logo.png": "assets/wp-content/uploads/Label-logo.png", "https://don-barber.gr/wp-content/uploads/kevin-murphy-logo.png": "assets/wp-content/uploads/kevin-murphy-logo.png", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-shop-online-reception.jpg": "assets/wp-content/uploads/don-barber-and-groom-shop-online-reception.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-wellness-thumb-1024x542.jpg": "assets/wp-content/uploads/don-barber-and-groom-wellness-thumb-1024x542.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-featured-gallery-about.jpg": "assets/wp-content/uploads/don-barber-and-groom-featured-gallery-about.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-reflexology-1-330x220.jpg": "assets/wp-content/uploads/don-barber-and-groom-reflexology-1-330x220.jpg", "https://don-barber.gr/wp-content/themes/don/images/logo-black.png": "assets/wp-content/themes/don/images/logo-black.png", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-dirty-330x220.jpg": "assets/wp-content/uploads/don-barber-and-groom-dirty-330x220.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-hand-and-feet-thumb-1024x542.jpg": "assets/wp-content/uploads/don-barber-and-groom-hand-and-feet-thumb-1024x542.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-winter-accessories-330x220.jpg": "assets/wp-content/uploads/don-barber-and-groom-winter-accessories-330x220.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-reflexology-1-1024x683.jpg": "assets/wp-content/uploads/don-barber-and-groom-reflexology-1-1024x683.jpg", "https://don-barber.gr/wp-content/themes/don/fonts/icomoon/fonts/icomoon.ttf?v686a2": "assets/icomoon_ff45f5d99212.ttf", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-dirty-1024x683.jpg": "assets/wp-content/uploads/don-barber-and-groom-dirty-1024x683.jpg", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.woff2": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.woff2", "https://don-barber.gr/wp-includes/js/jquery/jquery.min.js": "assets/wp-includes/js/jquery/jquery.min.js", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.woff2": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.woff2", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.woff2": "assets/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.woff2", "https://don-barber.gr/wp-includes/js/jquery/jquery-migrate.min.js": "assets/wp-includes/js/jquery/jquery-migrate.min.js", "https://don-barber.gr/wp-content/plugins/contact-form-7/includes/swv/js/index.js": "assets/wp-content/plugins/contact-form-7/includes/swv/js/index.js", "https://don-barber.gr/wp-content/plugins/contact-form-7/includes/js/index.js": "assets/wp-content/plugins/contact-form-7/includes/js/index.js", "https://don-barber.gr/wp-content/plugins/wp-smushit/app/assets/js/smush-lazy-load.min.js": "assets/wp-content/plugins/wp-smushit/app/assets/js/smush-lazy-load.min.js", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-winter-accessories-1024x683.jpg": "assets/wp-content/uploads/don-barber-and-groom-winter-accessories-1024x683.jpg", "https://don-barber.gr/wp-content/themes/don/js/TweenMax.min.js": "assets/wp-content/themes/don/js/TweenMax.min.js", "https://don-barber.gr/wp-content/themes/don/js/SplitText.min.js": "assets/wp-content/themes/don/js/SplitText.min.js", "https://don-barber.gr/wp-content/themes/don/js/blankshield.min.js": "assets/wp-content/themes/don/js/blankshield.min.js", "https://don-barber.gr/wp-content/themes/don/js/modernizr.js": "assets/wp-content/themes/don/js/modernizr.js", "https://don-barber.gr/wp-content/themes/don/js/skrollr.min.js": "assets/wp-content/themes/don/js/skrollr.min.js", "https://don-barber.gr/wp-content/themes/don/js/functions.js": "assets/wp-content/themes/don/js/functions.js", "https://don-barber.gr/wp-content/themes/don/js/main.js": "assets/wp-content/themes/don/js/main.js", "https://js.intercomcdn.com/vendor-modern.00ca12c4.js": "assets/js.intercomcdn.com/vendor-modern.00ca12c4.js", "https://js.intercomcdn.com/frame-modern.2062f251.js": "assets/js.intercomcdn.com/frame-modern.2062f251.js", "https://js.intercomcdn.com/vendors~locale-el-json-modern.894ca8bc.js": "assets/js.intercomcdn.com/vendors~locale-el-json-modern.894ca8bc.js", "https://privacy-analytics-proxy.cookiebot.com/analytics/main.js": "assets/analytics/main.js", "https://app-worker.visitor-analytics.io/main.js": "assets/app-worker.visitor-analytics.io/main.js", "https://js.intercomcdn.com/intersection/assets/app.js": "assets/intersection/assets/app.js", "https://js.intercomcdn.com/intersection/assets/styles.js": "assets/intersection/assets/styles.js", "https://privacy-analytics-proxy.cookiebot.com/analytics/auto-tracking-settings-renderer.css": "assets/analytics/auto-tracking-settings-renderer.css", "https://static.intercomassets.com/ember/@intercom/composer-ember/placeholder_rectangular_upload-92f3f2c8d91eb962f9323225bfb8cd24.svg": "assets/ember/@intercom/composer-ember/placeholder_rectangular_upload-92f3f2c8d91eb962f9323225bfb8cd24.svg", "https://static.intercomassets.com/ember/@intercom/composer-ember/placeholder_circle_upload-134b4324e0ef3d2d4ebbdfc71b7d7672.svg": "assets/ember/@intercom/composer-ember/placeholder_circle_upload-134b4324e0ef3d2d4ebbdfc71b7d7672.svg", "https://static.intercomassets.com/ember/@intercom/composer-ember/placeholder_rectangular-e0bdbd98075fa900f69b70cc302c3cf1.svg": "assets/ember/@intercom/composer-ember/placeholder_rectangular-e0bdbd98075fa900f69b70cc302c3cf1.svg", "https://static.intercomassets.com/ember/@intercom/composer-ember/placeholder_circle-a7ff9b0db5c630fad2f9ce5907379c5b.svg": "assets/ember/@intercom/composer-ember/placeholder_circle-a7ff9b0db5c630fad2f9ce5907379c5b.svg", "https://static.intercomassets.com/ember/@intercom/composer-ember/failed-image-upload-bc788e63a20a2fbb94f0647331e3f0c5.svg": "assets/ember/@intercom/composer-ember/failed-image-upload-bc788e63a20a2fbb94f0647331e3f0c5.svg", "https://downloads.intercomcdn.com/i/o/195704481/fde13be5b749bdb5975b8004/placeholder-image-centered.png": "assets/i/o/195704481/fde13be5b749bdb5975b8004/placeholder-image-centered.png", "https://static.intercomassets.com/assets/emails/social/clubhouse-original-144x144-at-6x-519ddfe202f1e6f69497315cef4d632d01d77f6ef2ea6a421d6a2b27097bcb2a.png": "assets/emails/social/clubhouse-original-144x144-at-6x-519ddfe202f1e6f69497315cef4d632d01d77f6ef2ea6a421d6a2b27097bcb2a.png", "https://static.intercomassets.com/assets/emails/social/discord-original-144x144-at-6x-b7be290943c15e1175ae8eafc22d7a1dfa805d381187a88ccb68be6450c9f30c.png": "assets/emails/social/discord-original-144x144-at-6x-b7be290943c15e1175ae8eafc22d7a1dfa805d381187a88ccb68be6450c9f30c.png", "https://static.intercomassets.com/assets/emails/social/dribbble-original-144x144-at-6x-6fe3f05463a0be79e6ce645994e390357d94276ebac7fedf4506e03fd0c68f91.png": "assets/emails/social/dribbble-original-144x144-at-6x-6fe3f05463a0be79e6ce645994e390357d94276ebac7fedf4506e03fd0c68f91.png", "https://static.intercomassets.com/assets/emails/social/facebook-original-144x144-at-6x-93185ee18c8aed7a0b2fefd42312bfbea42477baec75b23df450769a76a1b9fe.png": "assets/emails/social/facebook-original-144x144-at-6x-93185ee18c8aed7a0b2fefd42312bfbea42477baec75b23df450769a76a1b9fe.png", "https://static.intercomassets.com/assets/emails/social/figma-original-144x144-at-6x-06a56ce11ea8ce74adbc0d69e53ebaa9e7d12229d7b120a88bd02e0c5e8dd43b.png": "assets/emails/social/figma-original-144x144-at-6x-06a56ce11ea8ce74adbc0d69e53ebaa9e7d12229d7b120a88bd02e0c5e8dd43b.png", "https://static.intercomassets.com/assets/emails/social/github-original-144x144-at-6x-95a3861f1ef24ba7a37c56a8d254aa0d2579dc005345bbcc28ca6989984d24cf.png": "assets/emails/social/github-original-144x144-at-6x-95a3861f1ef24ba7a37c56a8d254aa0d2579dc005345bbcc28ca6989984d24cf.png", "https://static.intercomassets.com/assets/emails/social/google-original-144x144-at-6x-4762d985696c26ec866f1e7ff86a5a9c9792481bedacd502a15082b3f4fa1291.png": "assets/emails/social/google-original-144x144-at-6x-4762d985696c26ec866f1e7ff86a5a9c9792481bedacd502a15082b3f4fa1291.png", "https://static.intercomassets.com/assets/emails/social/instagram-original-144x144-at-6x-c46792c791114b34b0fe3a081ff1122a0b36f89577b32a35a0212aaaa042c7be.png": "assets/emails/social/instagram-original-144x144-at-6x-c46792c791114b34b0fe3a081ff1122a0b36f89577b32a35a0212aaaa042c7be.png", "https://static.intercomassets.com/assets/emails/social/linkedIn-original-144x144-at-6x-c8d9ed0939da6143c60ed253b1a41888897c51651f32267296b715f49c8f48bd.png": "assets/emails/social/linkedIn-original-144x144-at-6x-c8d9ed0939da6143c60ed253b1a41888897c51651f32267296b715f49c8f48bd.png", "https://static.intercomassets.com/assets/emails/social/medium-original-144x144-at-6x-cdcd6d531283849fe20f6ac9406fcba1c1bd04f5fecbff2fa9fbf02f7427a0b9.png": "assets/emails/social/medium-original-144x144-at-6x-cdcd6d531283849fe20f6ac9406fcba1c1bd04f5fecbff2fa9fbf02f7427a0b9.png", "https://static.intercomassets.com/assets/emails/social/pinterest-original-144x144-at-6x-1b7e7e62090deb87f2862c328c71499da8307aeecbbb77f9698b9c792f4e6df5.png": "assets/emails/social/pinterest-original-144x144-at-6x-1b7e7e62090deb87f2862c328c71499da8307aeecbbb77f9698b9c792f4e6df5.png", "https://static.intercomassets.com/assets/emails/social/reddit-original-144x144-at-6x-aa61542f595e879757a0131000f93a6bb1db9daa03b94d92efb66e7142932485.png": "assets/emails/social/reddit-original-144x144-at-6x-aa61542f595e879757a0131000f93a6bb1db9daa03b94d92efb66e7142932485.png", "https://static.intercomassets.com/assets/emails/social/signal-original-144x144-at-6x-24ba843d627add5c4ff69f15d6079a8b0fa5cc484eb83732e9d22239ee87fc35.png": "assets/emails/social/signal-original-144x144-at-6x-24ba843d627add5c4ff69f15d6079a8b0fa5cc484eb83732e9d22239ee87fc35.png", "https://static.intercomassets.com/assets/emails/social/skype-original-144x144-at-6x-6d81c5f471b088ac63477f43235f2299c5f100d115f209bd3b0b3d5b69944579.png": "assets/emails/social/skype-original-144x144-at-6x-6d81c5f471b088ac63477f43235f2299c5f100d115f209bd3b0b3d5b69944579.png", "https://static.intercomassets.com/assets/emails/social/snapchat-original-144x144-at-6x-6e9d5f7559f56922684a56d143d1a3f1f40d7fbb594e494ecd1e98d82c0fb5cf.png": "assets/emails/social/snapchat-original-144x144-at-6x-6e9d5f7559f56922684a56d143d1a3f1f40d7fbb594e494ecd1e98d82c0fb5cf.png", "https://static.intercomassets.com/assets/emails/social/spotify-original-144x144-at-6x-7a55f86959a2152550c7e3d173798bda70103157778567e9e7010f766b309a3c.png": "assets/emails/social/spotify-original-144x144-at-6x-7a55f86959a2152550c7e3d173798bda70103157778567e9e7010f766b309a3c.png", "https://static.intercomassets.com/assets/emails/social/strava-original-144x144-at-6x-be2bb2f382797dc683f081c0f61fdee5e26446560293a308a746e46c74b62aa4.png": "assets/emails/social/strava-original-144x144-at-6x-be2bb2f382797dc683f081c0f61fdee5e26446560293a308a746e46c74b62aa4.png", "https://static.intercomassets.com/assets/emails/social/telegram-original-144x144-at-6x-2966ced46a55c7a0d2ddc07ca4847d3910b6b20f256e7af019aba777c6fda0ee.png": "assets/emails/social/telegram-original-144x144-at-6x-2966ced46a55c7a0d2ddc07ca4847d3910b6b20f256e7af019aba777c6fda0ee.png", "https://static.intercomassets.com/assets/emails/social/tiktok-original-144x144-at-6x-1afac2c7ed29b8cba53f01ff529a9676555d46727db93e701e940d57e241345d.png": "assets/emails/social/tiktok-original-144x144-at-6x-1afac2c7ed29b8cba53f01ff529a9676555d46727db93e701e940d57e241345d.png", "https://static.intercomassets.com/assets/emails/social/tumblr-original-144x144-at-6x-1ad3b6bdb69b74d91b37f8a1bf4e135aa453b03b9320616c8c963c3ee163f5e8.png": "assets/emails/social/tumblr-original-144x144-at-6x-1ad3b6bdb69b74d91b37f8a1bf4e135aa453b03b9320616c8c963c3ee163f5e8.png", "https://static.intercomassets.com/assets/emails/social/twitch-original-144x144-at-6x-7563af817e6f71f1da89e21368ef1ed5753da7f70246419841a2f1b97179fc3e.png": "assets/emails/social/twitch-original-144x144-at-6x-7563af817e6f71f1da89e21368ef1ed5753da7f70246419841a2f1b97179fc3e.png", "https://static.intercomassets.com/assets/emails/social/twitter-original-144x144-at-6x-1f4d8081db9683c5330b0824afe1f0735bd6c8947b3877f0bbb9217d74b6fe28.png": "assets/emails/social/twitter-original-144x144-at-6x-1f4d8081db9683c5330b0824afe1f0735bd6c8947b3877f0bbb9217d74b6fe28.png", "https://static.intercomassets.com/assets/emails/social/vk-original-144x144-at-6x-a2b1914a89adbf3bcf5cf8e6b99a879362fade891efa5a7667a31e438bfaa419.png": "assets/emails/social/vk-original-144x144-at-6x-a2b1914a89adbf3bcf5cf8e6b99a879362fade891efa5a7667a31e438bfaa419.png", "https://static.intercomassets.com/assets/emails/social/twitter-x-original-144x144-at-6x-4c7c1be63ec34bcf4f56b36cc311a56cb4fe4f3baeb0e8e6765aede1b7012178.png": "assets/emails/social/twitter-x-original-144x144-at-6x-4c7c1be63ec34bcf4f56b36cc311a56cb4fe4f3baeb0e8e6765aede1b7012178.png", "https://static.intercomassets.com/assets/emails/social/youtube-original-144x144-at-6x-d101fa5f9d63e73fd1d7d0fc984b42aa02168df27a4171eb511a89293ab6ab80.png": "assets/emails/social/youtube-original-144x144-at-6x-d101fa5f9d63e73fd1d7d0fc984b42aa02168df27a4171eb511a89293ab6ab80.png", "https://static.intercomassets.com/assets/default-avatars/admins/64-24ac7c32f5e329b757d42753f9fc06f46fb8d6f0144660b7827b4a78852965b5.png": "assets/default-avatars/admins/64-24ac7c32f5e329b757d42753f9fc06f46fb8d6f0144660b7827b4a78852965b5.png", "https://static.intercomassets.com/assets/default-avatars/admins/73-f018236000e51ae69c92c7e6b48bfb78414886d691f42a45cecb86ab001158fb.png": "assets/default-avatars/admins/73-f018236000e51ae69c92c7e6b48bfb78414886d691f42a45cecb86ab001158fb.png", "https://static.intercomassets.com/assets/default-avatars/admins/128-da5b0f4e5162b0f45cba5a162df89b82eaddb92c5f5ae86e18629c8656aa3365.png": "assets/default-avatars/admins/128-da5b0f4e5162b0f45cba5a162df89b82eaddb92c5f5ae86e18629c8656aa3365.png", "https://static.intercomassets.com/assets/default-avatars/admins/140-9a00decfd3c4058c229822a01b95b784f514959a127280597dcfed3df7368bd6.png": "assets/default-avatars/admins/140-9a00decfd3c4058c229822a01b95b784f514959a127280597dcfed3df7368bd6.png", "https://static.intercomassets.com/assets/default-avatars/admins/200-4dab7e2646ea3c6b2c0f26e297f75f91b64f9adce89b83f21bfaa001c499aab4.png": "assets/default-avatars/admins/200-4dab7e2646ea3c6b2c0f26e297f75f91b64f9adce89b83f21bfaa001c499aab4.png", "https://static.intercomassets.com/assets/default-avatars/users/64-24ac7c32f5e329b757d42753f9fc06f46fb8d6f0144660b7827b4a78852965b5.png": "assets/default-avatars/users/64-24ac7c32f5e329b757d42753f9fc06f46fb8d6f0144660b7827b4a78852965b5.png", "https://static.intercomassets.com/assets/default-avatars/users/73-f018236000e51ae69c92c7e6b48bfb78414886d691f42a45cecb86ab001158fb.png": "assets/default-avatars/users/73-f018236000e51ae69c92c7e6b48bfb78414886d691f42a45cecb86ab001158fb.png", "https://static.intercomassets.com/assets/default-avatars/users/128-da5b0f4e5162b0f45cba5a162df89b82eaddb92c5f5ae86e18629c8656aa3365.png": "assets/default-avatars/users/128-da5b0f4e5162b0f45cba5a162df89b82eaddb92c5f5ae86e18629c8656aa3365.png", "https://static.intercomassets.com/assets/default-avatars/users/140-9a00decfd3c4058c229822a01b95b784f514959a127280597dcfed3df7368bd6.png": "assets/default-avatars/users/140-9a00decfd3c4058c229822a01b95b784f514959a127280597dcfed3df7368bd6.png", "https://static.intercomassets.com/assets/default-avatars/users/200-4dab7e2646ea3c6b2c0f26e297f75f91b64f9adce89b83f21bfaa001c499aab4.png": "assets/default-avatars/users/200-4dab7e2646ea3c6b2c0f26e297f75f91b64f9adce89b83f21bfaa001c499aab4.png", "https://static.intercomassets.com/ember/assets/svgs/default-company-avatar-47da0586a49f237092d7eff6c4d01a08.svg": "assets/ember/assets/svgs/default-company-avatar-47da0586a49f237092d7eff6c4d01a08.svg", "https://static.intercomassets.com/assets/default-avatars/fin/128-6fdc4d4f8f7a11ebe942ef4e9ed568423f7e5bd72ab639b4f6e8da8427eba4a4.png": "assets/default-avatars/fin/128-6fdc4d4f8f7a11ebe942ef4e9ed568423f7e5bd72ab639b4f6e8da8427eba4a4.png", "https://static.intercomassets.com/assets/default-avatars/fin/128-dark-009d73d12ec11c6b5320597b646eba822e8061dbea80e64549a136c239acbcee.png": "assets/default-avatars/fin/128-dark-009d73d12ec11c6b5320597b646eba822e8061dbea80e64549a136c239acbcee.png", "https://downloads.intercomcdn.com/i/o/593326577/b6af2227dcc8266a6432b4e5/Tooltips+group+color+settings.png": "assets/i/o/593326577/b6af2227dcc8266a6432b4e5/Tooltips+group+color+settings.png", "https://video-messages.intercomcdn.com/i/o/111206348/8ecdc037602e84fc1a895509/resized.mp4": "assets/i/o/111206348/8ecdc037602e84fc1a895509/resized.mp4", "https://static.intercomassets.com/ember/@intercom/embercom-composer/svgs/play-2961e3ca1c43cd9835f8dc08c2c2e293.svg": "assets/ember/@intercom/embercom-composer/svgs/play-2961e3ca1c43cd9835f8dc08c2c2e293.svg", "https://static.intercomassets.com/ember/@intercom/embercom-composer/svgs/pause-d0eabfe1dcf318c54a0053f5fadf124c.svg": "assets/ember/@intercom/embercom-composer/svgs/pause-d0eabfe1dcf318c54a0053f5fadf124c.svg", "https://static.intercomassets.com/ember/@intercom/embercom-composer/svgs/replay-328aea980768e4112ac304041bf1e8f6.svg": "assets/ember/@intercom/embercom-composer/svgs/replay-328aea980768e4112ac304041bf1e8f6.svg", "https://static.intercomassets.com/ember/@intercom/embercom-composer/svgs/loading-indicator-b880ca6538dacce7d5740264bfd60bc8.svg": "assets/ember/@intercom/embercom-composer/svgs/loading-indicator-b880ca6538dacce7d5740264bfd60bc8.svg", "https://don-barber.gr/apple-touch-icon.png": "assets/apple-touch-icon.png", "https://don-barber.gr/favicon-32x32.png": "assets/favicon-32x32.png", "https://don-barber.gr/favicon-16x16.png": "assets/favicon-16x16.png", "https://don-barber.gr/site.webmanifest": "assets/site.bin", "https://don-barber.gr/safari-pinned-tab.svg": "assets/safari-pinned-tab.svg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-entrance-exterior-721x768.jpg": "assets/wp-content/uploads/don-barber-and-groom-entrance-exterior-721x768.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-service-barbering-721x768.jpg": "assets/wp-content/uploads/don-barber-and-groom-service-barbering-721x768.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-services-wellness-721x768.jpg": "assets/wp-content/uploads/don-barber-and-groom-services-wellness-721x768.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-service-hand-and-feet-721x768.jpg": "assets/wp-content/uploads/don-barber-and-groom-service-hand-and-feet-721x768.jpg", "https://don-barber.gr/wp-content/uploads/picture-449x613-04-337x460.png": "assets/wp-content/uploads/picture-449x613-04-337x460.png", "https://don-barber.gr/wp-content/uploads/1-%CE%99%CE%A9%CE%91%CE%9D%CE%9D%CE%97%CE%A3-%CE%A3%CE%91%CE%9A%CE%95%CE%9B%CE%9B%CE%91%CE%A1%CE%91%CE%9A%CE%97%CE%A3-OWNER-MASTER-BARBER-2-306x460.jpg": "assets/wp-content/uploads/1-ΙΩΑΝΝΗΣ-ΣΑΚΕΛΛΑΡΑΚΗΣ-OWNER-MASTER-BARBER-2-306x460.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-shop-online-reception-768x443.jpg": "assets/wp-content/uploads/don-barber-and-groom-shop-online-reception-768x443.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-wellness-thumb-460x243.jpg": "assets/wp-content/uploads/don-barber-and-groom-wellness-thumb-460x243.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-hand-and-feet-thumb-460x243.jpg": "assets/wp-content/uploads/don-barber-and-groom-hand-and-feet-thumb-460x243.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-reflexology-1-460x307.jpg": "assets/wp-content/uploads/don-barber-and-groom-reflexology-1-460x307.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-dirty-460x307.jpg": "assets/wp-content/uploads/don-barber-and-groom-dirty-460x307.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-winter-accessories-460x307.jpg": "assets/wp-content/uploads/don-barber-and-groom-winter-accessories-460x307.jpg", "https://don-barber.gr/": "assets/resource_a7db56970470.html", "https://don-barber.gr/wp-content/uploads/1-ΙΩΑΝΝΗΣ-ΣΑΚΕΛΛΑΡΑΚΗΣ-OWNER-MASTER-BARBER-2-306x460.jpg": "assets/wp-content/uploads/1-ΙΩΑΝΝΗΣ-ΣΑΚΕΛΛΑΡΑΚΗΣ-OWNER-MASTER-BARBER-2-306x460.jpg", "https://don-barber.gr/wp-content/uploads/1-ΙΩΑΝΝΗΣ-ΣΑΚΕΛΛΑΡΑΚΗΣ-OWNER-MASTER-BARBER-2.jpg": "assets/wp-content/uploads/1-ΙΩΑΝΝΗΣ-ΣΑΚΕΛΛΑΡΑΚΗΣ-OWNER-MASTER-BARBER-2.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-wellness-thumb-768x406.jpg": "assets/wp-content/uploads/don-barber-and-groom-wellness-thumb-768x406.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-wellness-thumb.jpg": "assets/wp-content/uploads/don-barber-and-groom-wellness-thumb.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-hand-and-feet-thumb-768x406.jpg": "assets/wp-content/uploads/don-barber-and-groom-hand-and-feet-thumb-768x406.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-hand-and-feet-thumb.jpg": "assets/wp-content/uploads/don-barber-and-groom-hand-and-feet-thumb.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-reflexology-1-768x512.jpg": "assets/wp-content/uploads/don-barber-and-groom-reflexology-1-768x512.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-reflexology-1.jpg": "assets/wp-content/uploads/don-barber-and-groom-reflexology-1.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-dirty-768x512.jpg": "assets/wp-content/uploads/don-barber-and-groom-dirty-768x512.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-dirty.jpg": "assets/wp-content/uploads/don-barber-and-groom-dirty.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-winter-accessories-768x512.jpg": "assets/wp-content/uploads/don-barber-and-groom-winter-accessories-768x512.jpg", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-winter-accessories.jpg": "assets/wp-content/uploads/don-barber-and-groom-winter-accessories.jpg", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.eot": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.eot", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.eot#iefix": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.eot", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.woff": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.woff", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.ttf": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.ttf", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.svg": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.svg", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.svg#PFGrandGothikWide-Regular": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Reg/PFGrandGothikWide-Regular.svg", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.eot": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.eot", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.eot#iefix": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.eot", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.woff": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.woff", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.ttf": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.ttf", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.svg": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.svg", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.svg#PFGrandGothikWide-Bold": "assets/wp-content/themes/don/fonts/PFGrandGothikWide-Bold/PFGrandGothikWide-Bold.svg", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.eot": "assets/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.eot", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.eot#iefix": "assets/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.eot", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.woff": "assets/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.woff", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.ttf": "assets/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.ttf", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.svg": "assets/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.svg", "https://don-barber.gr/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.svg#PFGrandGothikCompressed-Reg": "assets/wp-content/themes/don/fonts/PFGrandGothikComp-Reg/PFGrandGothikCompressed-Reg.svg", "https://don-barber.gr/wp-content/themes/don/fonts/icomoon/fonts/icomoon.eot?v686a2": "assets/icomoon_ef8a6078b593.eot", "https://don-barber.gr/wp-content/themes/don/fonts/icomoon/fonts/icomoon.eot?v686a2#iefix": "assets/icomoon_ef8a6078b593.eot", "https://don-barber.gr/wp-content/themes/don/fonts/icomoon/fonts/icomoon.woff?v686a2": "assets/icomoon_ea242d137d73.woff", "https://don-barber.gr/wp-content/themes/don/fonts/icomoon/fonts/icomoon.svg?v686a2": "assets/icomoon_00c55bf03cf0.svg", "https://don-barber.gr/wp-content/themes/don/fonts/icomoon/fonts/icomoon.svg?v686a2#icomoon": "assets/icomoon_00c55bf03cf0.svg", "https://don-barber.gr/wp-content/themes/don/images/tl-gradient.png": "assets/wp-content/themes/don/images/tl-gradient.png", "https://don-barber.gr/wp-content/themes/don/images/label.svg": "assets/wp-content/themes/don/images/label.svg", "https://www.googletagmanager.com/gtag/js?id=UA-113704050-1": "assets/js_1efee33494d5.js", "https://don-barber.gr/wp-content/uploads/don-barber-and-groom-featured-home.jpg": "assets/wp-content/uploads/don-barber-and-groom-featured-home.jpg"};

    // Index 1: local-path basename -> [localPaths]  (for relative imports like ./chunk.js)
    const basenameIndex = {};
    // Index 2: original-url basename -> [localPaths]  (for requests using original filename before hash suffix)
    const originalBasenameIndex = {};
    // Index 3/4: basename stem -> [{ basename, localPath }] for extension-family fallback
    const localStemIndex = {};
    const originalStemIndex = {};

    const EXTENSION_FAMILIES = [
        ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'],
        ['.mp4', '.webm', '.mov', '.m4v', '.ogv'],
        ['.mp3', '.wav', '.ogg', '.m4a', '.aac'],
        ['.woff', '.woff2', '.ttf', '.otf', '.eot'],
    ];

    function splitBasenameParts(filename) {
        const clean = String(filename || '').split('?')[0].split('#')[0];
        const dotIndex = clean.lastIndexOf('.');
        if (dotIndex <= 0) return { basename: clean, stem: clean, ext: '' };
        return {
            basename: clean,
            stem: clean.slice(0, dotIndex),
            ext: clean.slice(dotIndex).toLowerCase(),
        };
    }

    function stemCandidates(stem) {
        const candidates = [];
        if (stem) candidates.push(stem);
        for (const separator of ['.', '-']) {
            if (stem && stem.includes(separator)) {
                const prefix = stem.split(separator, 1)[0];
                if (prefix && !candidates.includes(prefix)) {
                    candidates.push(prefix);
                }
            }
        }
        return candidates;
    }

    function getExtensionFamily(ext) {
        for (const family of EXTENSION_FAMILIES) {
            if (family.includes(ext)) return family;
        }
        return null;
    }

    function areCompatibleExtensions(left, right) {
        if (!left || !right) return false;
        if (left === right) return true;
        const family = getExtensionFamily(left);
        return !!family && family.includes(right);
    }

    function pushStemIndex(index, basename, localPath) {
        const parts = splitBasenameParts(basename);
        if (!parts.stem || !parts.ext) return;
        for (const candidateStem of stemCandidates(parts.stem)) {
            if (!index[candidateStem]) index[candidateStem] = [];
            index[candidateStem].push({ basename: parts.basename, ext: parts.ext, localPath });
        }
    }

    function findEquivalentBasenameMatch(basename, index, withLeadingSlash) {
        const requested = splitBasenameParts(basename);
        if (!requested.stem || !requested.ext) return null;

        const compatible = [];
        const seen = new Set();
        for (const candidateStem of stemCandidates(requested.stem)) {
            const candidates = index[candidateStem] || [];
            for (const candidate of candidates) {
                if (!areCompatibleExtensions(requested.ext, candidate.ext)) continue;
                const key = `${candidate.localPath}::${candidate.ext}`;
                if (seen.has(key)) continue;
                seen.add(key);
                compatible.push(candidate);
            }
        }
        if (compatible.length !== 1) return null;

        const match = compatible[0].localPath;
        return withLeadingSlash ? '/' + match : match;
    }

    Object.entries(resourceMap).forEach(([originalUrl, localPath]) => {
        const normalizedLocalPath = String(localPath || '').replace(/^\/+/, '');
        // Build local basename index
        if (normalizedLocalPath.startsWith('assets/')) {
            const localBasename = normalizedLocalPath.split('/').pop();
            if (!basenameIndex[localBasename]) basenameIndex[localBasename] = [];
            basenameIndex[localBasename].push(normalizedLocalPath);
            pushStemIndex(localStemIndex, localBasename, normalizedLocalPath);
        }
        // Build original URL basename index
        try {
            const origBasename = originalUrl.split('/').pop().split('?')[0];
            if (origBasename) {
                if (!originalBasenameIndex[origBasename]) originalBasenameIndex[origBasename] = [];
                originalBasenameIndex[origBasename].push(localPath);
                pushStemIndex(originalStemIndex, origBasename, normalizedLocalPath || localPath);
            }
        } catch(e) {}
    });

    // Normalize any URL to absolute href
    function normalizeUrl(url, baseUrl) {
        if (!url) return url;
        if (typeof url === 'object' && url.url) url = url.url; // Request object
        if (url.startsWith('data:') || url.startsWith('blob:')) return url;
        try {
            return new URL(url, baseUrl || window.location.href).href;
        } catch(e) {
            return url;
        }
    }

    // Resolve relative paths (/chunk.js, ../utils.js) using referrer context
    function resolveRelativePath(url, referrer) {
        if (!url.startsWith('./') && !url.startsWith('../')) return null;
        try {
            const referrerUrl = new URL(referrer || window.location.href);
            const referrerDir = referrerUrl.pathname.substring(0, referrerUrl.pathname.lastIndexOf('/') + 1);
            const resolved = new URL(url, window.location.origin + referrerDir).pathname;
            const basename = resolved.split('/').pop();

            if (basenameIndex[basename]) {
                if (basenameIndex[basename].length === 1) return '/' + basenameIndex[basename][0];
                // Multiple matches: prefer same directory structure
                const referrerPath = referrer.replace(window.location.origin, '');
                for (const candidate of basenameIndex[basename]) {
                    if (referrerPath.includes('assets/') && candidate.includes(basename)) {
                        return '/' + candidate;
                    }
                }
                return '/' + basenameIndex[basename][0];
            }
            // Try original basename index too
            if (originalBasenameIndex[basename] && originalBasenameIndex[basename].length === 1) {
                return originalBasenameIndex[basename][0];
            }
            const originalStemMatch = findEquivalentBasenameMatch(basename, originalStemIndex, false);
            if (originalStemMatch) return originalStemMatch;
            const localStemMatch = findEquivalentBasenameMatch(basename, localStemIndex, true);
            if (localStemMatch) return localStemMatch;
        } catch(e) {
            console.warn('[Fetch Interceptor] Relative path resolution failed:', url, e);
        }
        return null;
    }

    // Main lookup: find local path for any URL
    function getLocalPath(url, referrer) {
        const rawUrl = typeof url === 'string'
            ? url
            : (url && typeof url === 'object' && url.url ? url.url : String(url || ''));

        // 1. Relative paths (/x, ../x) - resolve via referrer
        if (rawUrl.startsWith('./') || rawUrl.startsWith('../')) {
            const resolved = resolveRelativePath(rawUrl, referrer);
            if (resolved) return resolved;
        }

        const normalized = normalizeUrl(rawUrl, referrer);

        // 2. Exact match in resource map
        if (resourceMap[normalized]) return resourceMap[normalized];

        // 3. Protocol-relative variant (//domain.com/path)
        const withoutProtocol = normalized.replace(/^https?:/, '');
        if (resourceMap[withoutProtocol]) return resourceMap[withoutProtocol];

        // 4. Basename match against ORIGINAL URL basenames
        //    This handles cases where the saved file has a hash suffix appended:
        //    browser requests "chunk.js" but file was saved as "chunk_abc123.js"
        try {
            const basename = normalized.split('/').pop().split('?')[0];
            if (basename) {
                if (originalBasenameIndex[basename] && originalBasenameIndex[basename].length === 1) {
                    return originalBasenameIndex[basename][0];
                }
                // 5. Fallback: local path basename index
                if (basenameIndex[basename] && basenameIndex[basename].length === 1) {
                    return '/' + basenameIndex[basename][0];
                }
                const originalStemMatch = findEquivalentBasenameMatch(basename, originalStemIndex, false);
                if (originalStemMatch) {
                    return originalStemMatch;
                }
                const localStemMatch = findEquivalentBasenameMatch(basename, localStemIndex, true);
                if (localStemMatch) {
                    return localStemMatch;
                }
            }
        } catch(e) {}

        return null;
    }

    // Block requests to external CDNs that have no local copy
    function isExternalCDN(url) {
        try {
            const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
            if (urlObj.origin !== window.location.origin) {
                const hostname = urlObj.hostname.toLowerCase();
                const cdnMarkers = ['.b-cdn.', 'cdn.', '.cloudfront.', '.akamai', '.fastly.'];
                return cdnMarkers.some(marker => hostname.includes(marker));
            }
        } catch(e) {}
        return false;
    }

    // Check if URL is external (different origin)
    function isExternal(url) {
        try {
            const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
            return urlObj.origin !== window.location.origin;
        } catch(e) {
            return false;
        }
    }

    function isTrackingEndpoint(url) {
        try {
            const urlObj = new URL(normalizeUrl(url, window.location.href), window.location.href);
            const hostname = urlObj.hostname.toLowerCase();
            const path = (urlObj.pathname || '').toLowerCase();
            const combined = `${hostname}${path}`;
            const markers = [
                'monorail',
                'api/collect',
                '/collect',
                'web-pixels',
                'webpixels',
                'web-pixel',
                '/pixel',
                'pixel.',
                'shopifycloud/web-pixels-manager',
                'hotjar',
                'klaviyo',
                'cookiebot',
                'consentcdn',
            ];
            return markers.some(marker => combined.includes(marker));
        } catch(e) {
            return false;
        }
    }

    function buildMockResponse(url, method) {
        let mockData = {};
        if ((method || 'GET').toUpperCase() === 'GET' && String(url).includes('/rest/')) {
            mockData = [];
        }
        return new Response(JSON.stringify(mockData), {
            status: 200,
            statusText: 'OK (Mocked)',
            headers: { 'Content-Type': 'application/json' }
        });
    }

    function toComparableUrl(url) {
        if (!url) return '';
        try {
            return new URL(url, window.location.href).href;
        } catch (e) {
            return String(url);
        }
    }

    function comparableCandidates(urls) {
        const candidates = new Set();

        for (const url of urls) {
            if (!url) continue;
            const comparable = toComparableUrl(url);
            if (comparable) candidates.add(comparable);

            const localPath = getLocalPath(url, window.location.href);
            const comparableLocal = toComparableUrl(localPath);
            if (comparableLocal) candidates.add(comparableLocal);
        }

        candidates.delete('');
        return candidates;
    }

    function hasExistingAsset(tagName, attrName, urls) {
        const targetUrls = Array.isArray(urls) ? urls : [urls];
        const comparableTargets = comparableCandidates(targetUrls);
        if (!comparableTargets.size) return false;

        const elements = tagName === 'script'
            ? Array.from(document.scripts || [])
            : Array.from(document.querySelectorAll(tagName));

        return elements.some((element) => {
            const currentValue = element.getAttribute(attrName) || element[attrName] || '';
            if (!currentValue) return false;

            const currentComparable = toComparableUrl(currentValue);
            if (currentComparable && comparableTargets.has(currentComparable)) {
                return true;
            }

            const currentLocalPath = getLocalPath(currentValue, window.location.href);
            const currentComparableLocal = toComparableUrl(currentLocalPath);
            return currentComparableLocal && comparableTargets.has(currentComparableLocal);
        });
    }

    function neutralizeDuplicateNode(node, kind, url) {
        node.setAttribute('data-interceptor-duplicate', 'true');

        if (kind === 'script') {
            // Keep src intact so the app's onload callback can read it (avoids "Asset timed out undefined").
            // Changing type to a non-JS MIME prevents the browser from executing it again.
            node.type = 'application/json';
        } else if (kind === 'link') {
            node.setAttribute('data-interceptor-disabled', 'true');
            // Keep href intact to avoid browser warnings about invalid preload URLs.
            setTimeout(() => {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }, 0);
        }

        // Use dispatchEvent so the browser sets event.target = node before calling onload.
        // Calling node.onload(event) directly leaves event.target = null, which causes
        // the app's load callback to read undefined as the asset URL → "Asset timed out undefined".
        setTimeout(() => {
            try { node.dispatchEvent(new Event('load')); } catch (e) {}
        }, 0);

        console.log('[DOM Interceptor] = Duplicate', kind, url);
        return node;
    }

    function isFrameworkChunkScript(url) {
        if (!url) return false;
        const value = String(url);
        return (
            value.includes('/_next/static/chunks/') ||
            value.includes('/_next/static/chunks/app/') ||
            value.includes('/assets/js/script_')
        );
    }

    const originalSetAttribute = Element.prototype.setAttribute;

    function toBrowserPath(localPath) {
        if (!localPath) return localPath;
        if (
            localPath.startsWith('/') ||
            localPath.startsWith('data:') ||
            localPath.startsWith('blob:') ||
            localPath.startsWith('http://') ||
            localPath.startsWith('https://') ||
            localPath.startsWith('//')
        ) {
            return localPath;
        }
        return '/' + localPath;
    }

    function encodeBrowserUrl(value) {
        if (!value || value.startsWith('data:') || value.startsWith('blob:')) {
            return value;
        }

        return value
            .replace(/ /g, '%20')
            .replace(/,/g, '%2C');
    }

    function rewriteSrcsetValue(srcset, referrer) {
        if (!srcset) return srcset;

        return srcset
            .split(',')
            .map((part) => {
                const trimmed = part.trim();
                if (!trimmed) return trimmed;

                const match = trimmed.match(/^(\S+)(?:\s+(.+))?$/);
                if (!match) return trimmed;

                const originalUrl = match[1];
                const descriptor = match[2] || '';
                const localPath = getLocalPath(originalUrl, referrer);
                const rewrittenUrl = localPath && localPath !== originalUrl
                    ? encodeBrowserUrl(toBrowserPath(localPath))
                    : encodeBrowserUrl(originalUrl);

                return descriptor ? `${rewrittenUrl} ${descriptor}` : rewrittenUrl;
            })
            .join(', ');
    }

    function rewriteMediaAttributeValue(tagName, attrName, value, referrer) {
        if (!value || typeof value !== 'string') return value;

        if (attrName === 'srcset') {
            return rewriteSrcsetValue(value, referrer);
        }

        const localPath = getLocalPath(value, referrer);
        if (localPath && localPath !== value) {
            return toBrowserPath(localPath);
        }

        return value;
    }

    function localizeMediaElement(node, referrer) {
        if (!node || !node.tagName) return node;

        const tagName = node.tagName.toLowerCase();
        if (!['img', 'source', 'video', 'audio', 'track'].includes(tagName)) {
            return node;
        }

        const mediaAttrs = ['src', 'srcset', 'poster'];
        for (const attrName of mediaAttrs) {
            const currentValue = node.getAttribute(attrName);
            if (!currentValue) continue;

            const rewrittenValue = rewriteMediaAttributeValue(
                tagName,
                attrName,
                currentValue,
                referrer || window.location.href
            );
            if (rewrittenValue && rewrittenValue !== currentValue) {
                originalSetAttribute.call(node, attrName, rewrittenValue);
                console.log('[DOM Interceptor] ✓', tagName, currentValue, '->', rewrittenValue);
            }
        }

        return node;
    }

    function localizeMediaTree(root, referrer) {
        if (!root || root.nodeType !== Node.ELEMENT_NODE) return;

        localizeMediaElement(root, referrer);
        if (typeof root.querySelectorAll !== 'function') return;

        root.querySelectorAll('img, source, video, audio, track').forEach((element) => {
            localizeMediaElement(element, referrer);
        });
    }

    function rewriteDynamicElement(node) {
        if (!node || !node.tagName) return node;

        const tagName = node.tagName.toLowerCase();
        if (['img', 'source', 'video', 'audio', 'track'].includes(tagName)) {
            return localizeMediaElement(node, window.location.href);
        }

        if (tagName === 'script') {
            const originalSrc = node.getAttribute('src') || node.src;
            if (!originalSrc) return node;

            const localPath = getLocalPath(originalSrc, window.location.href);
            const targetSrc = localPath || originalSrc;
            const allowFrameworkDuplicate = (
                isFrameworkChunkScript(originalSrc) || isFrameworkChunkScript(targetSrc)
            );
            if (!allowFrameworkDuplicate && hasExistingAsset('script', 'src', [originalSrc, targetSrc])) {
                return neutralizeDuplicateNode(node, 'script', targetSrc);
            }

            if (localPath && localPath !== originalSrc) {
                node.setAttribute('src', localPath);
                console.log('[DOM Interceptor] \u2713 script', originalSrc, '->', localPath);
                return node;
            }

            if (isTrackingEndpoint(originalSrc) || (isExternal(originalSrc) && isExternalCDN(originalSrc))) {
                node.removeAttribute('src');
                node.type = 'application/json';
                console.warn('[DOM Interceptor] \u2717 Blocked dynamic script:', originalSrc);
            }
            return node;
        }

        if (tagName === 'link') {
            const rel = (node.getAttribute('rel') || '').toLowerCase();
            if (!rel || !['preload', 'prefetch', 'modulepreload', 'stylesheet'].some(value => rel.includes(value))) {
                return node;
            }

            const originalHref = node.getAttribute('href') || node.href;
            if (!originalHref) return node;

            const localPath = getLocalPath(originalHref, window.location.href);
            const targetHref = localPath || originalHref;
            if (hasExistingAsset('link', 'href', [originalHref, targetHref])) {
                return neutralizeDuplicateNode(node, 'link', targetHref);
            }

            if (localPath && localPath !== originalHref) {
                node.setAttribute('href', localPath);
                console.log('[DOM Interceptor] \u2713 link', originalHref, '->', localPath);
                return node;
            }
        }

        return node;
    }

    const originalAppendChild = Node.prototype.appendChild;
    Node.prototype.appendChild = function(node) {
        return originalAppendChild.call(this, rewriteDynamicElement(node));
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function(node, referenceNode) {
        return originalInsertBefore.call(this, rewriteDynamicElement(node), referenceNode);
    };

    const originalReplaceChild = Node.prototype.replaceChild;
    Node.prototype.replaceChild = function(newChild, oldChild) {
        return originalReplaceChild.call(this, rewriteDynamicElement(newChild), oldChild);
    };

    Element.prototype.setAttribute = function(name, value) {
        if (this && this.tagName && typeof name === 'string') {
            const tagName = this.tagName.toLowerCase();
            const attrName = name.toLowerCase();
            if (
                ['img', 'source', 'video', 'audio', 'track'].includes(tagName) &&
                ['src', 'srcset', 'poster'].includes(attrName)
            ) {
                const rewrittenValue = rewriteMediaAttributeValue(
                    tagName,
                    attrName,
                    String(value),
                    window.location.href
                );
                return originalSetAttribute.call(this, name, rewrittenValue);
            }
        }

        return originalSetAttribute.call(this, name, value);
    };

    function patchMediaProperty(proto, propertyName) {
        if (!proto) return;
        const descriptor = Object.getOwnPropertyDescriptor(proto, propertyName);
        if (!descriptor || typeof descriptor.set !== 'function') return;

        Object.defineProperty(proto, propertyName, {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: descriptor.get
                ? function() {
                    return descriptor.get.call(this);
                }
                : undefined,
            set: function(value) {
                const tagName = this.tagName ? this.tagName.toLowerCase() : '';
                const rewrittenValue = rewriteMediaAttributeValue(
                    tagName,
                    propertyName.toLowerCase(),
                    String(value),
                    window.location.href
                );
                return descriptor.set.call(this, rewrittenValue);
            },
        });
    }

    patchMediaProperty(window.HTMLImageElement && window.HTMLImageElement.prototype, 'src');
    patchMediaProperty(window.HTMLImageElement && window.HTMLImageElement.prototype, 'srcset');
    patchMediaProperty(window.HTMLSourceElement && window.HTMLSourceElement.prototype, 'src');
    patchMediaProperty(window.HTMLSourceElement && window.HTMLSourceElement.prototype, 'srcset');
    patchMediaProperty(window.HTMLVideoElement && window.HTMLVideoElement.prototype, 'poster');
    patchMediaProperty(window.HTMLMediaElement && window.HTMLMediaElement.prototype, 'src');

    function observeMediaMutations() {
        const root = document.documentElement || document;
        if (!root || typeof MutationObserver === 'undefined') return;

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes') {
                    localizeMediaElement(mutation.target, window.location.href);
                    continue;
                }

                mutation.addedNodes.forEach((node) => {
                    localizeMediaTree(node, window.location.href);
                });
            }
        });

        observer.observe(root, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['src', 'srcset', 'poster'],
        });
    }

    function installMediaLocalization() {
        localizeMediaTree(document.documentElement, window.location.href);
        observeMediaMutations();
    }

    const revealFallbackSeenAt = new WeakMap();

    function isNearViewport(element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
        return rect.bottom >= -viewportHeight * 0.15 && rect.top <= viewportHeight * 1.15;
    }

    function releaseStaleRevealState() {
        if (!document.documentElement.classList.contains('sr')) return;

        const now = performance.now();
        document.querySelectorAll('[data-reveal]').forEach((element) => {
            if (!isNearViewport(element)) {
                revealFallbackSeenAt.delete(element);
                return;
            }

            const styles = getComputedStyle(element);
            const isHidden = styles.visibility === 'hidden' || Number(styles.opacity || '1') <= 0.01;
            if (!isHidden) {
                revealFallbackSeenAt.delete(element);
                return;
            }

            const firstSeenAt = revealFallbackSeenAt.get(element);
            if (typeof firstSeenAt !== 'number') {
                revealFallbackSeenAt.set(element, now);
                return;
            }

            if (now - firstSeenAt < 1800) {
                return;
            }

            element.style.visibility = 'visible';
            element.style.opacity = '1';
            element.removeAttribute('data-reveal');
            element.setAttribute('data-interceptor-reveal-fallback', 'true');
            revealFallbackSeenAt.delete(element);
            console.log('[DOM Interceptor] ✓ reveal fallback', element.tagName.toLowerCase(), element.className || element.id || '');
        });
    }

    let revealFallbackRaf = 0;
    function scheduleRevealFallback() {
        if (revealFallbackRaf) return;
        revealFallbackRaf = requestAnimationFrame(() => {
            revealFallbackRaf = 0;
            releaseStaleRevealState();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            installMediaLocalization();
            scheduleRevealFallback();
        }, { once: true });
    } else {
        installMediaLocalization();
        scheduleRevealFallback();
    }

    window.addEventListener('scroll', scheduleRevealFallback, { passive: true });
    window.addEventListener('resize', scheduleRevealFallback);
    window.addEventListener('load', () => {
        scheduleRevealFallback();
        setTimeout(scheduleRevealFallback, 1500);
        setTimeout(scheduleRevealFallback, 4000);
    });

    // Intercept fetch()
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        const referrer = (options && options.referrer) || document.currentScript?.src || window.location.href;
        const method = (options && options.method) || 'GET';
        const localPath = getLocalPath(url, referrer);

        if (localPath) {
            console.log('[Fetch Interceptor] \u2713', url, '->', localPath);
            return originalFetch(localPath, options);
        }

        if (isTrackingEndpoint(url)) {
            console.warn('[Fetch Interceptor] \u2717 Blocked tracking call:', url);
            return Promise.resolve(buildMockResponse(url, method));
        }

        // CRITICAL FIX: Block all external requests that have no local mapping
        // This prevents 406/CORS errors from leaking to real APIs (Supabase, etc)
        if (isExternal(url)) {
            console.warn('[Fetch Interceptor] \u2717 Blocked external leak:', url);
            return Promise.resolve(buildMockResponse(url, method));
        }

        return originalFetch(url, options);
    };

    // Intercept XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method, url, ...args) {
        const referrer = document.currentScript?.src || window.location.href;
        const localPath = getLocalPath(url, referrer);

        // Store original URL for send() interception
        this._interceptedUrl = url;
        this._hasLocalMapping = !!localPath;

        if (localPath) {
            console.log('[XHR Interceptor] \u2713', url, '->', localPath);
            return originalOpen.call(this, method, localPath, ...args);
        }

        // CRITICAL FIX: Allow open() to proceed, but intercept send() for external URLs
        return originalOpen.call(this, method, url, ...args);
    };

    XMLHttpRequest.prototype.send = function(...args) {
        // If URL is external and has no local mapping, block and return mock
        if (this._interceptedUrl && !this._hasLocalMapping && (
            isTrackingEndpoint(this._interceptedUrl) || isExternal(this._interceptedUrl)
        )) {
            if (isTrackingEndpoint(this._interceptedUrl)) {
                console.warn('[XHR Interceptor] \u2717 Blocked tracking call:', this._interceptedUrl);
            } else {
                console.warn('[XHR Interceptor] \u2717 Blocked external leak:', this._interceptedUrl);
            }

            // Simulate successful response
            Object.defineProperty(this, 'status', { value: 200, writable: false });
            Object.defineProperty(this, 'statusText', { value: 'OK (Mocked)', writable: false });
            Object.defineProperty(this, 'responseText', {
                value: this._interceptedUrl.includes('/rest/') ? '[]' : '{}',
                writable: false
            });
            Object.defineProperty(this, 'response', {
                value: this._interceptedUrl.includes('/rest/') ? '[]' : '{}',
                writable: false
            });
            Object.defineProperty(this, 'readyState', { value: 4, writable: false });

            // Trigger load event asynchronously
            setTimeout(() => {
                if (this.onload) this.onload({ type: 'load', target: this });
                if (this.onreadystatechange) this.onreadystatechange({ type: 'readystatechange', target: this });
            }, 0);

            return;
        }

        return originalSend.apply(this, args);
    };

    console.log('[Fetch Interceptor] Installed with', Object.keys(resourceMap).length, 'mappings');
    console.log('[Fetch Interceptor] Basename index:', Object.keys(basenameIndex).length, 'files');
})();
