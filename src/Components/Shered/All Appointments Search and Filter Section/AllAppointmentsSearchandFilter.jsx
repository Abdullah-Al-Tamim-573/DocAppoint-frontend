import React from "react";

const AllAppointmentsSearchandFilter = () => {
  return (
    <>
      <div className="mb-6 bg-white shadow-md rounded-xl p-3 flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search doctor by name, specialty..."
          className="flex-1 px-4 py-3 border rounded-lg outline-none text-sm"
        />

        {/* Button */}
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-sm transition">
          Search
        </button>

        {/* Filters */}
        <select className="px-3 py-3 border rounded-lg text-sm outline-none">
          <option>All Specializations</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Dental</option>
        </select>

        <select className="px-3 py-3 border rounded-lg text-sm outline-none">
          <option>Most Popular</option>
          <option>Top Rated</option>
          <option>Nearest</option>
        </select>
      </div>
    </>
  );
};

export default AllAppointmentsSearchandFilter;
