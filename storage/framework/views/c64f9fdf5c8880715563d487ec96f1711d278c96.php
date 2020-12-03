<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

    <title>Vuesax - Vuejs Admin Dashboard Template</title>
    <!-- Styles -->
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/main.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/iconfont.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/material-icons/material-icons.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/vuesax.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/prism-tomorrow.css'))); ?>">
    <link rel="stylesheet" href="<?php echo e(asset(mix('css/app.css'))); ?>">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but Vuesax - Vuejs Admin Dashboard Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
    </div>

    <!-- <script src="js/app.js"></script> -->
    <script src="<?php echo e(asset(mix('js/app.js'))); ?>"></script>

  </body>
</html>
<?php /**PATH /Applications/XAMPP/xamppfiles/htdocs/vuexy-vuejs-laravel-starter-kit/resources/views/application.blade.php ENDPATH**/ ?>