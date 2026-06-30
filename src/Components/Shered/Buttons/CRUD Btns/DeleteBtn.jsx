"use client"

import { handleDelete } from "@/Services/CRUD Operation/Delete";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";


const DeleteBtn = ({id}) => {
  let router = useRouter()
  return (
    <>
      <button onClick={() => handleDelete(id, router)} className="h-10 cursor-pointer rounded-xl border border-red-500 text-red-500 font-medium flex items-center justify-center gap-2 hover:bg-red-100">
        <Trash2 size={15} />
        Delete
      </button>
    </>
  );
};

export default DeleteBtn;
