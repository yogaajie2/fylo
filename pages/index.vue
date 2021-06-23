<template>
  <main class="mt-24">
    <section class="text-center lg:flex lg:flex-row-reverse lg:items-center">
      <img
        class="lg:ml-16 lg:w-5/12"
        src="~/assets/img/illustration-1.svg"
        alt="Illustration of two people putting files into a huge folder"
      />

      <div class="lg:text-left">
        <p class="font-bold font-heading mt-10 text-2xl lg:leading-tight lg:mt-0 lg:text-4xl">All your files in one secure location, accessible anywhere.</p>

        <p class="mt-6 lg:mt-3 lg:text-lg">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>

        <form 
          @submit.prevent="validateEmail(emailTop)"
          action=""
          class="mt-2"
        >
          <p
            :class="{ invisible: hideCheckEmail }"
            class="text-left text-light-red"
          >Please check your email</p>

          <div class="mt-1 lg:flex">
            <input
              :class="[hideCheckEmail ? validBorder : '', invalidBorder]"
              v-model.lazy.trim="emailTop"
              type="text"
              class="block border p-2 rounded w-full"
              placeholder="Enter your email..."
            />

            <button
              type="submit"
              class="block bg-bright-blue font-bold mt-4 px-2 py-3 rounded shadow-lg text-white w-full lg:ml-4 lg:mr-24 lg:mt-0 lg:w-3/4 hover:bg-desaturated-bright-blue"
            >Get Started</button>
          </div>
        </form>
      </div>
    </section>

    <section class="mt-24 -mx-6 lg:mt-40 lg:-mx-20">
      <div class="bg-cover bg-no-repeat h-12 bg-curve lg:h-24"></div>

      <div class="bg-light-grayish-blue pb-24 px-6 lg:flex lg:flex-row-reverse lg:items-center lg:pt-12 lg:px-20">
        <img
          class="lg:ml-12 lg:w-5/12"
          src="~/assets/img/illustration-2.svg"
          alt="Illustration of 3 people putting 3 message together."
        />

        <div class="lg:text-left">
          <p class="font-bold font-heading mt-24 text-center text-base lg:mt-0 lg:text-4xl lg:text-left">Stay productive, wherever you are</p>

          <p class="mt-8 lg:text-lg">Never let location be an issue when accessing your files. Fylo has you coverred for all of your file storage needs.</p>
          
          <p class="mt-4 lg:text-lg">Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required!</p>

          <div class="text-center lg:text-left">
            <a
              href="javascript:void(0)"
              class="border-b border-moderate-cyan inline-block mt-10 pb-1 text-moderate-cyan lg:mt-4 hover:border-desaturated-moderate-cyan hover:text-desaturated-moderate-cyan"
            >
              See how Fylo works

              <img
                class="inline ml-1"
                src="~/assets/img/icon-arrow.svg"
                alt="Right arrow icon"
              />
            </a>
          </div>

          <blockquote class="bg-white mt-12 mx-6 pl-8 pr-4 py-4 shadow-lg text-xs lg:mx-0 lg:w-1/2">
            <img
              src="~/assets/img/icon-quotes.svg"
              alt="Quotes icon"
            />

            <p class="leading-relaxed mt-3">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            
            <div class="flex items-end mt-4">
              <img
                class="h-8 rounded-full"
                src="~/assets/img/avatar-testimonial.jpg"
                alt="Avatar of Kyle Burton"
              />
              
              <div class="ml-2">
                <p class="font-bold font-heading">Kyle Burton</p>
                
                <p class="text-2xs">Founder & CEO, Huddle</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="bg-desaturated-blue -mx-6 px-8 py-12 text-center text-white lg:flex lg:justify-between lg:-mx-20 lg:px-20 lg:py-24 lg:text-left">
      <div class="lg:w-2/6">
        <p class="font-bold font-heading text-lg lg:text-3xl">Get early access today</p>

        <p class="mt-4 lg:mt-6 lg:text-base">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      </div>

      <form
        @submit.prevent="validateEmail(emailBottom)"
        action=""
        class="mt-8 mx-8 text-xs lg:m-0 lg:text-sm lg:w-5/12"
      >
        <p
          :class="{ invisible: hideCheckEmail }"
          class="text-left text-light-red"
        >Please check your email</p>

        <div>
          <input
            :class="[hideCheckEmail ? validBorder : '', invalidBorder]"
            v-model.lazy.trim="emailBottom"
            type="text"
            class="block border mt-1 p-2 rounded-sm shadow-md text-black w-full lg:p-4"
            placeholder="email@example.com"
          />

          <button
            type="submit"
            class="block bg-bright-blue font-bold font-heading mt-2 p-2 rounded-sm shadow-lg w-full lg:mt-4 lg:p-4 lg:w-5/12 hover:bg-desaturated-bright-blue"
          >Get Started For Free</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      emailTop: '',
      emailBottom: '',
      
      isValid: false,

      validBorder: 'border-very-dark-blue',
      invalidBorder: 'border-light-red',

      hideCheckEmail: true
    };
  },

  methods: {
    validateEmail: function(email) {
      const regex = /\S+@\S+\.\S+/;
      
      let validation = regex.test(email);

      if (validation) {
        this.isValid = false;
        this.hideCheckEmail = true;
        
        alert('Thank you for subscribing!');
      } else {
        this.isValid = true;
        this.hideCheckEmail = false;
      }
    }
  }
}
</script>
