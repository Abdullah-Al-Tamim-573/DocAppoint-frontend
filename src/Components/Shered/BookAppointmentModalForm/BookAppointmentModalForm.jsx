"use server";

import { Modal, Button, Input, TextArea } from "@heroui/react";

import {
  CalendarDays
} from "lucide-react";

 let BookAppointmentModalForm = async ({name}) => {
  return (
    <Modal>
      {/* book appointment */}
      <Button className="w-full h-14 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
        <CalendarDays size={20} />
        Book Appointment
      </Button>

      {/* modal */}
      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-2xl rounded-[30px] overflow-hidden border border-slate-200 bg-white shadow-2xl">
            {/* modal close btn */}
            <Modal.CloseTrigger className="absolute right-5 top-5 z-50" />

            {/* modal header */}
            <Modal.Header className="px-7 pt-7 pb-3">
              <div className="flex items-center gap-4">
                {/* modal icon */}
                <div className="h-14 w-14 rounded-2xl bg-teal-100 flex items-center justify-center">
                  <CalendarDays size={28} className="text-teal-600" />
                </div>

                {/* modal title */}
                <div>
                  <Modal.Heading className="text-2xl font-bold text-slate-800">
                    Book Appointment
                  </Modal.Heading>

                  <p className="text-sm text-slate-500 mt-1">
                    Complete your appointment booking
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* modal body */}
            <Modal.Body className="px-7 pb-7">
              <form className="space-y-5">
                {/* USER EMAIL */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    User Email
                  </label>
                  {/* user email input */}
                  <Input
                    placeholder="enter email"
                    className={"text-slate-400 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"}
                  />
                </div>

                {/* modal doctor name (no change) */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Doctor Name
                  </label>
                  {/* doctor name input */}
                  <Input
                    value={name}
                    readOnly
                    className={"text-slate-400 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"}
                  />
                </div>

                {/* modal patient name */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Patient Name
                  </label>
                  {/* patient name input */}

                  <Input
                    placeholder="Enter patient name"
                    className={
                      "text-slate-400 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                    }
                  />
                </div>

                {/* modal gender + phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* modal gender select option */}
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-slate-700">
                      Gender
                    </label>

                    <select className="w-full h-14 rounded-2xl border border-slate-200 px-4 text-slate-700 outline-none focus:border-teal-500 focus:bg-[#e6f4f7] bg-white">
                      <option value="">Select Gender</option>

                      <option value="male">Male</option>

                      <option value="female">Female</option>

                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* modal user phone number */}
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>

                     {/* phone number input */}
              
                    <Input 
                    placeholder="01XXXXXXXXX"
                    className={'focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none'}
                    />
                  </div>
                </div>

                {/* modal date + time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* modal date */}
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-slate-700">
                      Appointment Date
                    </label>
                     {/* date input */}
                    <Input
                     type="date"
                     className={'focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none'}
                    />
                  </div>

                  {/* modal time */}
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-slate-700">
                      Appointment Time
                    </label>
                   {/* time input */}
                    <Input
                    type="time"
                    className={'focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none'}
                    />
                  </div>
                </div>

                {/* modal message*/}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Reason (Optional)
                  </label>

                  <TextArea
                    row={4}
                    placeholder="Write brief reason for visit..."
                    className={'focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none w-full'}
                  />
                </div>

                {/* modal submit btn */}
                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <CalendarDays size={20} />
                  Confirm Appointment
                </button>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}


export default BookAppointmentModalForm