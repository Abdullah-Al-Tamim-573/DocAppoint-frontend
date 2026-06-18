"use client"

import { handleDelete } from "@/Services/CRUD Operation/Delete";
import { Trash2 } from "lucide-react";
import React from "react";

const DeleteBtn = ({id}) => {
  return (
    <>
      <button onClick={() => handleDelete(id)} className="h-10 rounded-xl border border-red-500 text-red-500 font-medium flex items-center justify-center gap-2 hover:bg-red-50">
        <Trash2 size={15} />
        Delete
      </button>
    </>
  );
};

export default DeleteBtn;
