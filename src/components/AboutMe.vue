<script setup lang="ts">
// import components
import ProfileCard from "./bits/ProfileCard.vue";
import ScrambledText from "./bits/ScrambleText.vue";
</script>

<template>
  <!-- ////////// Container /////////// -->
  <div
    class="flex items-center justify-between px-4 lg:px-6 py-6 md:py-9 mx-auto max-w-330"
  >
    <div
      class="flex flex-col items-center xl:items-start lg:flex-row gap-6 xl:gap-2"
    >
      <div class="xl:mr-6">
        <!-- ////////// Title ////////// -->
        <h2
          class="jersey-10-regular flex gap-2 text-6xl lg:text-[96px] cursor-pointer"
        >
          <p
            class="bg-[linear-gradient(180deg,#E4E4E4_0%,#0C0503_90%)] bg-clip-text text-transparent"
          >
            About
          </p>
          <p
            class="bg-[linear-gradient(180deg,#F55303_0%,#632701_90%)] bg-clip-text text-transparent"
          >
            ME
          </p>
        </h2>

        <!-- ////////// Description ////////// -->
        <ScrambledText
          className="scrambled-text-demo"
          :radius="100"
          :duration="1.2"
          :speed="0.5"
          scrambleChars=".:"
          class="mt-2 lg:mt-0"
        >
          นักศึกษาชั้นปีที่ 4 สาขาวิศวกรรมคอมพิวเตอร์ สนใจการพัฒนาเว็บไซต์ฝั่ง Front-End และการออกแบบ UX/UI มีประสบการณ์พัฒนาเว็บไซต์ด้วย React, Vue และ TypeScript สามารถนำแบบจาก Figma มาพัฒนาเป็นเว็บไซต์ที่ตรงตามดีไซน์ พร้อมให้ความสำคัญกับประสบการณ์ผู้ใช้ (UX) การออกแบบที่รองรับทุกขนาดหน้าจอ (Responsive Design) และการเขียนโค้ดที่มีคุณภาพ พร้อมเรียนรู้และพัฒนาทักษะอย่างต่อเนื่องเพื่อสร้างเว็บไซต์ที่ตอบโจทย์ผู้ใช้งาน
        </ScrambledText>

        <div class="flex flex-col gap-2 mt-6">
          <!-- ////////// Study ////////// -->
          <span class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              color="#F55303"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-map-pin-house-icon lucide-map-pin-house"
            >
              <path
                d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"
              />
              <path
                d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"
              />
              <path d="M18 22v-3" />
              <circle cx="10" cy="10" r="3" />
            </svg>

            <ScrambledText
              className="scrambled-text-demo"
              :radius="100"
              :duration="1.2"
              :speed="0.5"
              scrambleChars=".:"
            >
              จังหวัดหนองบัวลำภู ประเทศไทย
            </ScrambledText>
          </span>

          <!-- ////////// Address ////////// -->
          <span span class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              color="#F55303"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-graduation-cap-icon lucide-graduation-cap shrink-0"
            >
              <path
                d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
              />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>

            <ScrambledText
              className="scrambled-text-demo"
              :radius="100"
              :duration="1.2"
              :speed="0.5"
              scrambleChars=".:"
            >
               วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์ (กำลังศึกษา)
            </ScrambledText>
          </span>
        </div>
      </div>

      <!-- ////////// Image Me ////////// -->
      <ProfileCard
        name="Kitsada Ketrai"
        title="Full Stack Designer"
        handle="lnwkit007"
        status="Github"
        contact-text="Contact Me"
        avatar-url="/image/hero/kitsada.png"
        :show-user-info="true"
        :enable-tilt="true"
        :enable-mobile-tilt="false"
      />
    </div>
  </div>
</template>
