"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PatientReviewCard from "../PatientReviewCard/PatientReviewCard";

export default function ReviewSlider() {
  return (
    <div className="p-[40px] bg-[#f9f9f9]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* card 1 */}
        <SwiperSlide>
          <PatientReviewCard
            patientReviewText={`DocAppoint made it so easy to find the right doctor and book an
              appointment. Highly recommended!`}
            patientName={"— Rashed Hasan"}
          ></PatientReviewCard>
        </SwiperSlide>
        {/* card 2 */}
        <SwiperSlide>
          <PatientReviewCard
            patientReviewText={`Very user friendly platform and doctors are very
                      professional. Excellent experience!`}
            patientName={"— Farzana Akter"}
          ></PatientReviewCard>
        </SwiperSlide>
        {/* card 3 */}
        <SwiperSlide>
          <PatientReviewCard
            patientReviewText={`Booking was quick and hassle free. Great service and
                      support from the team.`}
            patientName={"— Mahmudul Islam"}
          ></PatientReviewCard>
        </SwiperSlide>
        {/* card 4 */}
        <SwiperSlide>
          <PatientReviewCard
            patientReviewText={`Amazing doctors and very smooth appointment process.
                      Everything worked perfectly.`}
            patientName={"— Anika Rahman"}
          ></PatientReviewCard>
        </SwiperSlide>
        {/* card 5 */}
        <SwiperSlide>
          <PatientReviewCard
            patientReviewText={`I found the best specialist within minutes. Super clean
                      and modern interface.`}
            patientName={"— Sazzad Karim"}
          ></PatientReviewCard>
        </SwiperSlide>
        {/* card 6 */}
        <SwiperSlide>
          <PatientReviewCard
            patientReviewText={`Customer support was excellent and the appointment reminder
                      system is very helpful.`}
            patientName={"— Tamanna Rahman"}
          ></PatientReviewCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
