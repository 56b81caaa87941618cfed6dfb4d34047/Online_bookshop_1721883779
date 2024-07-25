Vue.component('faq_accordion_1721883813', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Everything You Need to Know About Buying Books Online</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Get answers to the most frequently asked questions about our book-buying app.</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What types of books can I purchase?",
          a: "Our app offers a vast selection of books across all genres, including fiction, non-fiction, biographies, children's books, and more. Whether you're looking for the latest bestsellers or classic literature, we've got you covered."
        },
        {
          q: "How do I place an order?",
          a: "Placing an order is easy! Simply browse our selection, add the books you want to your cart, and proceed to checkout. You can pay securely with your credit card or other preferred payment method."
        },
        {
          q: "Do you offer free shipping?",
          a: "Yes, we offer free standard shipping on all orders over a certain amount (typically $25 or more). For faster delivery, you can choose expedited shipping at an additional cost during checkout."
        },
        {
          q: "Can I return or exchange a book?",
          a: "Absolutely! We have a hassle-free return policy. If you're not satisfied with your purchase for any reason, you can return the book within a certain timeframe for a full refund or exchange."
        },
        {
          q: "How can I track my order?",
          a: "After placing your order, you'll receive a confirmation email with a tracking number. You can use this number to check the status of your shipment and estimated delivery date on our website or through the courier's tracking system."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});