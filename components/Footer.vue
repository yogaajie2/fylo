<template>
  <footer class="bg-very-dark-blue -mx-6 pb-12 pt-16 px-8 text-white lg:-mx-20 lg:px-20 lg:py-24">
    <img
      src="~/assets/img/logo-white.png"
      alt="White Fylo logo"
    />

    <div class="lg:flex lg:justify-between lg:mt-6 lg:w-5/6">
      <div class="lg:space-y-4">
        <div class="flex mt-12 lg:mt-0">
          <img
            class="h-4 w-5"
            src="~/assets/img/icon-phone.svg"
            alt=""
          />

          <p class="ml-4">Phone: +1-543-123-4567</p>
        </div>

        <div class="flex mt-6 lg:mt-0">
          <img
            class="h-4 w-5"
            src="~/assets/img/icon-email.svg"
            alt=""
          />

          <p class="ml-4">example@fylo.com</p>
        </div>
      </div>

      <nav class="mt-12 space-y-4 lg:mt-0">
        <a
          class="block hover:text-desaturated-blue"
          href="javascript:void(0)"
        >About Us</a>
        
        <a
          class="block hover:text-desaturated-blue"
          href="javascript:void(0)"
        >Jobs</a>
        
        <a
          class="block hover:text-desaturated-blue"
          href="javascript:void(0)"
        >Press</a>
        
        <a
          class="block hover:text-desaturated-blue"
          href="javascript:void(0)"
        >Blog</a>
      </nav>

      <nav class="mt-12 space-y-4 lg:mt-0">
        <a
          class="block hover:text-desaturated-blue"
          href="javascript:void(0)"
        >Contact Us</a>
        
        <a
          class="block hover:text-desaturated-blue"
          href="javascript:void(0)"
        >Terms</a>
        
        <a
          class="block hover:text-desaturated-blue"
          href="javascript:void(0)"
        >Privacy</a>
      </nav>

      <div class="flex mt-12 justify-center space-x-3 lg:mt-0">
        <a href="javascript:void(0)">
          <div class="border border-white flex h-8 items-center justify-center rounded-full w-8 hover:text-facebook-blue hover:border-facebook-blue">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          </div>
        </a>

        <a href="javascript:void(0)">
          <div class="border border-white flex h-8 items-center justify-center rounded-full w-8 hover:text-twitter-blue hover:border-twitter-blue">
            <font-awesome-icon :icon="['fab', 'twitter']"/>
          </div>
        </a>

        <a href="javascript:void(0)">
          <div class="border border-white flex h-8 items-center justify-center rounded-full w-8 hover:text-desaturated-blue hover:border-desaturated-blue">
            <font-awesome-icon :icon="['fab', 'instagram']"/>
          </div>
        </a>
      </div>
    </div>
  </footer>
</template>