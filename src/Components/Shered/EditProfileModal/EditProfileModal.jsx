import { handleProfileEditForm } from "@/Services/Form Submit/ProfileEditForm";
import {
  Modal,
  Button,
  TextField,
  Input,
  Label,
  FieldError,
} from "@heroui/react";

import { CalendarDays, Pencil } from "lucide-react";



const EditProfileModal = ({name, image}) => {
  
  
  return (
    <>
      <Modal>
        {/* edit profile btn */}
          <Button  className="h-12 px-6 rounded-xl border bg-teal-50 border-teal-500 text-teal-500 hover:bg-teal-100 cursor-pointer  flex items-center justify-center gap-2 font-medium">
            <Pencil size={16} />
            Edit Profile
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
                    <Pencil size={28} className="text-teal-600" />
                  </div>

                  {/* modal title */}
                  <div>
                    <Modal.Heading className="text-2xl font-bold text-slate-800">
                      Edit Profile
                    </Modal.Heading>

                   
                  </div>
                </div>
              </Modal.Header>

              {/* modal body */}
              <Modal.Body className="px-7 pb-7">
                {/* edit form */}
                <form onSubmit={(e) => handleProfileEditForm(e)}>
                  

                  {/* modal patient name */}
                  <TextField
                    defaultValue={name}
                    type="text"
                    isRequired
                    name="name"
                    className={'mb-3'}
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
                  {/* modal patient email */}
               
                  {/* modal patient image url */}
                  <TextField
                    defaultValue={image}
                    type="url"
                    isRequired
                    name="image"
                  >
                    <Label className="block mb-2 text-sm font-semibold text-slate-700">
                      Patient PhotoUrl
                    </Label>
                    {/* patient email input */}
                    <Input
                      className={
                        "text-slate-500 w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
                      }
                    />
                    <FieldError className="text-rose-500 text-xs mt-1" />
                  </TextField>
           
                 

                

                  {/* modal submit btn */}
                  <Button
                 
                     
                    type="submit"
                    className="w-full cursor-pointer h-14 mt-4 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <CalendarDays size={20} />
                    Save Changes
                  </Button>
                </form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default EditProfileModal;
