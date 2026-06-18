"use client";

import { handleUpgradeForm } from "@/Services/CRUD Operation/UpgradeFormSubmit";
import {
  Modal,
  Button,
  TextField,
  Input,
  Label,
  FieldError,
  TextArea,
} from "@heroui/react";

import { CalendarDays, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";


const BookingUpgradeForm = ({
  doctorName,
  id,
  patientName,
  gender,
  userPhoneNumber,
  appointmentDate,
  appointmentTime,
}) => {

    let router = useRouter()

  return (
    <>
      <Modal>
        {/* book appointment upgrade btn */}
        <Button className="h-10  rounded-xl border border-teal-500 bg-[#f0fdfa] text-teal-600 font-medium flex items-center justify-center gap-2 hover:bg-teal-100 w-full">
          <Pencil size={15} />
          Update
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
                    <Pencil size={28}  className="text-teal-600" />
                  </div>

                  {/* modal title */}
                  <div>
                    <Modal.Heading className="text-2xl font-bold text-slate-800">
                      Upgrade Appointment
                    </Modal.Heading>

                    <p className="text-sm text-slate-500 mt-1">
                      Upgrade your appointment booking
                    </p>
                  </div>
                </div>
              </Modal.Header>

              {/* modal body */}
              <Modal.Body className="px-7 pb-7">
                <form onSubmit={(e) => handleUpgradeForm(e, id, router)}>
                  {/* modal doctor name (no change) */}
                  <TextField name="doctorName">
                    <Label className="block mb-2 text-sm font-semibold text-slate-700">
                      Doctor Name
                    </Label>
                    {/* doctor name input */}
                    <Input
                      value={doctorName}
                      readOnly
                      className={
                        "text-slate-400 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                      }
                    />
                  </TextField>

                  {/* modal patient name */}
                  <TextField
                    defaultValue={patientName}
                    isRequired
                    name="patientName"
                  >
                    <Label className="block mb-2 text-sm font-semibold text-slate-700">
                      Patient Name
                    </Label>
                    {/* patient name input */}
                    <Input
                      className={
                        "text-slate-500 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
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
                        defaultValue={gender}
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
                    defaultValue={userPhoneNumber}
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
                    <TextField defaultValue={appointmentDate} isRequired name="appointmentDate" type="date">
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
                    <TextField defaultValue={appointmentTime} isRequired name="appointmentTime" type="time">
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

                  {/* modal submit btn */}
                  <button
                    type="submit"
                    className="w-full h-14 mt-4 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <CalendarDays size={20} />
                    Save Changes
                  </button>
                </form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default BookingUpgradeForm;
