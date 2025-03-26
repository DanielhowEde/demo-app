import React from "react";
import { v4 as uuidv4 } from "uuid";
import BackButton from "../components/BackButton";

const TablePage = () => {
  const data = [
    { id: uuidv4(), animal: "Dog", color: "Brown", size: "Large", legs: 4 },
    { id: uuidv4(), animal: "Cat", color: "Black", size: "Small", legs: 4 },
    { id: uuidv4(), animal: "Elephant", color: "Gray", size: "Large", legs: 4 },
    { id: uuidv4(), animal: "Bird", color: "Blue", size: "Small", legs: 2 },
    { id: uuidv4(), animal: "Horse", color: "White", size: "Large", legs: 4 },
    { id: uuidv4(), animal: "Fish", color: "Gold", size: "Small", legs: 0 },
    { id: uuidv4(), animal: "Frog", color: "Green", size: "Medium", legs: 4 },
    { id: uuidv4(), animal: "Kangaroo", color: "Red", size: "Medium", legs: 2 },
    { id: uuidv4(), animal: "Rabbit", color: "Gray", size: "Small", legs: 4 },
    { id: uuidv4(), animal: "Spider", color: "Black", size: "Small", legs: 8 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl">Animal Table</h1>
      <table className="table-auto border-collapse border border-gray-400 w-full mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">ID</th>
            <th className="border border-gray-400 p-2">Animal</th>
            <th className="border border-gray-400 p-2">Color</th>
            <th className="border border-gray-400 p-2">Size</th>
            <th className="border border-gray-400 p-2">Legs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border border-gray-400 p-2">{item.id}</td>
              <td className="border border-gray-400 p-2">{item.animal}</td>
              <td className="border border-gray-400 p-2">{item.color}</td>
              <td className="border border-gray-400 p-2">{item.size}</td>
              <td className="border border-gray-400 p-2">{item.legs}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BackButton />
    </div>
  );
};

export default TablePage;
