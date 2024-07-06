<script setup lang="ts">
defineProps<{
    items: any[],
    title: string,
    subtitle: string,
    benefits: any[]
}>()
</script>
<template>
    <div class="text-center">
        <h1 class="text-left sm:text-center text-purple text-4xl md:text-[2.75rem] min-[1319px]:text-[4.5rem] w-content leading-[1.15] mb-2">
            {{ title }}
        </h1>
        <p class="text-left sm:text-center text-text--light text-md md:text-xl lg:text-[1.375rem] leading-[1.75]">
            {{ subtitle }}
        </p>
        
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_574px] min-[1319px]:grid-cols-[1fr_574px_1fr] items-center mx-auto gap-8 mt-20 lg:mt-4 min-[1319px]:mt-0">
            <div class="text-left lg:justify-self-end">
                <div class="relative inline-block ml-6 sm:ml-10 lg:ml-0">
                    <svg class="absolute -left-[65px] sm:-left-[43px] -top-10 scale-[.7] sm:scale-100" width="304" height="335" viewBox="0 0 304 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_25_71" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95836 102.973C3.58213 109.349 0 117.997 0 127.014V300.986C0 319.764 15.2223 334.986 34 334.986H269.184C287.961 334.986 303.184 319.764 303.184 300.986V30C303.184 13.4315 289.752 0 273.184 0H127.014C117.997 0 109.349 3.58213 102.973 9.95837L9.95836 102.973Z"/>
                        </mask>
                        <path d="M1 300.986V127.014H-1V300.986H1ZM269.184 333.986H34V335.986H269.184V333.986ZM302.184 30V300.986H304.184V30H302.184ZM273.184 1C289.2 1 302.184 13.9837 302.184 30H304.184C304.184 12.8792 290.304 -1 273.184 -1V1ZM127.014 1H273.184V-1H127.014V1ZM102.266 9.25126L9.25126 102.266L10.6655 103.68L103.68 10.6655L102.266 9.25126ZM269.184 335.986C288.513 335.986 304.184 320.316 304.184 300.986H302.184C302.184 319.211 287.409 333.986 269.184 333.986V335.986ZM1 127.014C1 118.262 4.47677 109.869 10.6655 103.68L9.25126 102.266C2.68748 108.83 -1 117.732 -1 127.014H1ZM127.014 -1C117.732 -1 108.83 2.68749 102.266 9.25126L103.68 10.6655C109.869 4.47678 118.262 1 127.014 1V-1ZM-1 300.986C-1 320.316 14.67 335.986 34 335.986V333.986C15.7746 333.986 1 319.211 1 300.986H-1Z" fill="#634EC3" fill-opacity="0.2" mask="url(#path-1-inside-1_25_71)"/>
                    </svg>
                    <div class="sliced-rectangle--first w-[230px] sm:w-[286px] sm:h-[316px] rounded-[34px] bg-[#E8F0F3] text-center">
                        <img class="inline-block object-cover h-full" :src="items[0].image">
                    </div>
                    <div class="absolute -top-14 -right-8 lg:right-[8rem] lg:-top-[4.5rem] min-[1319px]:-top-14 min-[1319px]:-right-8 bg-white shadow-[0px_6px_52px_0px_rgba(0,_0,_0,_0.06)] p-4 rounded-lg border border-solid border-[#F9F9F9] text-left scale-75 sm:scale-100">
                        <h2 class="text-text--light text-lg font-medium m-0">{{ items[0].title }}</h2>
                        <p class="text-purple text-xl font-medium mt-3">{{ items[0].currency }}{{ items[0].price }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col text-center mt-2 lg:mt-8 lg:justify-self-start min-[1319px]:justify-self-center">
                <button class="bg-purple text-[#F9F9F9] inline-flex items-center h-[65px] rounded-lg gap-6 px-6 min-[1319px]:max-w-[365px] self-start min-[1319px]:self-center w-full leading-none hover:brightness-90">
                    <span class="ml-auto translate-x-7 text-xl ">Shop Now</span>
                    <div class="w-[39px] h-[39px] rounded-full bg-orange flex items-center justify-center ml-auto">
                        <svg class="inline-block" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_22_42)">
                                <path d="M28.3137 15.5858C29.0915 16.3636 29.0915 17.6364 28.3137 18.4142L18.4142 28.3137C17.6364 29.0915 16.3636 29.0915 15.5858 28.3137L5.68629 18.4142C4.90847 17.6364 4.90847 16.3636 5.68629 15.5858L15.5858 5.68627C16.3636 4.90845 17.6364 4.90845 18.4142 5.68627L28.3137 15.5858ZM17.495 11.8381L17.495 14.808L12.0503 14.8787L12.0503 18.8385L17.495 18.7677L17.495 21.879L22.5154 16.8586L17.495 11.8381Z" fill="#F9DEDE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_22_42">
                                    <rect width="24" height="24" fill="white" transform="translate(17 33.9706) rotate(-135)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </button>
                <div class="inline-block mt-10 lg:mt-6 relative text-left shrink grow-0 min-[1319px]:grow self-center min-[1319px]:self-center max-w-full">
                    <svg class="absolute -right-0 sm:-right-10 -bottom-[5rem] sm:-bottom-6 w-[400px] sm:w-[519px]" width="519" height="382" viewBox="0 0 519 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_22_8" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M519 173.399C519 163.16 515.429 153.242 508.903 145.353L401.861 15.9543C393.503 5.84956 381.072 0 367.958 0H30C13.4315 0 0 13.4314 0 30V352C0 368.569 13.4314 382 30 382H489C505.569 382 519 368.569 519 352V173.399Z"/>
                        </mask>
                        <path d="M508.903 145.353L509.674 144.716L508.903 145.353ZM509.674 144.716L402.632 15.3169L401.091 16.5917L508.133 145.99L509.674 144.716ZM30 1H367.958V-1H30V1ZM1 30C1 13.9837 13.9837 1 30 1V-1C12.8792 -1 -1 12.8792 -1 30H1ZM1 352V30H-1V352H1ZM30 381C13.9837 381 1 368.016 1 352H-1C-1 369.121 12.8792 383 30 383V381ZM489 381H30V383H489V381ZM518 352C518 368.016 505.016 381 489 381V383C506.121 383 520 369.121 520 352H518ZM518 173.399V352H520V173.399H518ZM402.632 15.3169C394.083 4.9825 381.37 -1 367.958 -1V1C380.774 1 392.922 6.71661 401.091 16.5917L402.632 15.3169ZM508.133 145.99C514.511 153.7 518 163.393 518 173.399H520C520 162.928 516.348 152.784 509.674 144.716L508.133 145.99Z" fill="#634EC3" fill-opacity="0.2" mask="url(#path-1-inside-1_22_8)"/>
                    </svg>
                    <div class="sliced-rectangle--second w-[519px] max-w-full mx-auto h-[285px] sm:h-[382px] rounded-[34px] bg-[#FDEDED]">
                        <img class="inline-block object-cover h-full" :src="items[1].image">
                    </div>
                    <div class="absolute -top-0 -right-6 bg-white shadow-[0px_6px_52px_0px_rgba(0,_0,_0,_0.06)] p-4 rounded-lg border border-solid border-[#F9F9F9] scale-75 sm:scale-100">
                        <h2 class="text-text--light text-lg font-medium m-0">{{ items[1].title }}</h2>
                        <p class="text-purple text-xl font-medium mt-3">{{ items[1].currency }}{{ items[1].price }}</p>
                    </div>
                </div>
            </div>
            <div class="text-center lg:col-span-2 min-[1319px]:col-span-1 mt-10 lg:mt-6 min-[1319px]:mt-0">
                <ul class="inline-block text-left lg:text-center min-[1319px]:text-left space-y-6 sm:space-y-8 w-fit">
                    <li v-for="benefit in benefits">
                        <div class="flex min-[1319px]:inline-flex px-4 gap-4 pr-6 items-center border border-solid border-purple bg-white rounded-full h-[59px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1L9 9L1 12L9 15L12 23L15 15L23 12L15 9L12 1Z" fill="#F9791C"/>
                            </svg>
                            <span class="text-lg sm:text-xl leading-none">
                                {{ benefit }}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    
</template>
<style scoped>
    h1 {
        font-family: 'Alice', sans-serif;
    }
    .sliced-rectangle--first {
        mask: url("@/assets/images/rectangle-01.svg");
        mask-repeat: space;
    }
    .sliced-rectangle--second {
        mask: url("@/assets/images/rectangle-02.svg") center right;
        mask-repeat: space;
    }
</style>