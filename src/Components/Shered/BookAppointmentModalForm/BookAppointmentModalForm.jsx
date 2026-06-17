"use client";

import { handleBookAppointment } from "@/Services/Form Submit/FormSubmits";

import {
  
  Modal,
  Button,
  TextField,
  Input,
  Label,
  FieldError,
  TextArea,
  
} from "@heroui/react";

import { CalendarDays } from "lucide-react";




let BookAppointmentModalForm = ({ name }) => {
  
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
              <form onSubmit={() =>handleBookAppointment()} className="space-y-5">
                {/* modal user email */}
                <TextField
                  isRequired
                  name="userEmail"
                  type="email"
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label className="block mb-2 text-sm font-semibold text-slate-700">
                    User Email
                  </Label>
                  {/* user email input */}
                  <Input
                    placeholder="enter email"
                    className={
                      "text-slate-400 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                    }
                  />
                  <FieldError className="text-rose-500 text-xs mt-1" />
                </TextField>

                {/* modal doctor name (no change) */}
                <TextField name="doctorName">
                  <Label className="block mb-2 text-sm font-semibold text-slate-700">
                    Doctor Name
                  </Label>
                  {/* doctor name input */}
                  <Input
                    value={name}
                    readOnly
                    className={
                      "text-slate-400 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                    }
                  />
                </TextField>

                {/* modal patient name */}
                <TextField isRequired name="patientName">
                  <Label className="block mb-2 text-sm font-semibold text-slate-700">
                    Patient Name
                  </Label>
                  {/* patient name input */}
                  <Input
                    placeholder="Enter patient name"
                    className={
                      "text-slate-400 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                    }
                  />
                  <FieldError className="text-rose-500 text-xs mt-1" />
                </TextField>

                {/* modal gender + phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* modal gender select option */}

                  <div>
                    <Label className="block mb-2 text-sm font-semibold text-slate-700">
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <select
                      required
                      name="gender"
                      className="w-full h-14 rounded-2xl border border-slate-200 px-4 text-slate-700 outline-none focus:border-teal-500 focus:bg-[#e6f4f7] bg-white"
                    >
                      <option value="">Select Gender</option>

                      <option value="male">Male</option>

                      <option value="female">Female</option>

                      <option value="other">Other</option>
                    </select>
                  </div>

                  

                  {/* modal user phone number */}
                  <TextField
                    isRequired
                    name="userPhoneNumber"
                    type="tel"
                    validate={(value) => {
                      if (!/^01[3-9]\d{8}$/.test(value)) {
                        return "Please enter a valid 11-digit phone number";
                      }
                      return null;
                    }}
                  >
                    <Label className="block mb-2 text-sm font-semibold text-slate-700">
                      Phone Number
                    </Label>
                    {/* phone number input */}
                    <Input
                      placeholder="01XXXXXXXXX"
                      className={
                        "focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                      }
                    />
                    <FieldError className="text-rose-500 text-xs mt-1" />
                  </TextField>
                </div>

                {/* modal date + time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* modal date */}
                  <TextField isRequired name="appointmentDate" type="date">
                    <Label className="block mb-2 text-sm font-semibold text-slate-700">
                      Appointment Date
                    </Label>
                    {/* date input */}
                    <Input
                      className={
                        "focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                      }
                    />
                    <FieldError className="text-rose-500 text-xs mt-1" />
                  </TextField>

                  {/* modal time */}
                  <TextField isRequired name="appointmentTime" type="time">
                    <Label className="block mb-2 text-sm font-semibold text-slate-700">
                      Appointment Time
                    </Label>
                    {/* time input */}
                    <Input
                      className={
                        "focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                      }
                    />
                    <FieldError className="text-rose-500 text-xs mt-1" />
                  </TextField>
                </div>

                {/* modal message*/}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Reason (Optional)
                  </label>

                  <TextArea
                    name="appointmentReason"
                    row={4}
                    placeholder="Write brief reason for visit..."
                    className={
                      "focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none w-full"
                    }
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
};

export default BookAppointmentModalForm;
