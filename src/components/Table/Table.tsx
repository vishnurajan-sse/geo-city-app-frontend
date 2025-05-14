
import { type TableProps } from "../../interfaces/common";
 
  const Table = <T,>({ columns, data, onRowClick }: TableProps<T>) => {  
  return (
    <div className="overflow-x-auto bg-white shadow rounded border-1 border-gray-700">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-700 text-white uppercase text-xs">
          <tr>
            {columns.map((col) => (
              <th key={String(col.responseKey)} className="px-4 py-4 whitespace-nowrap">
              {col.header}
            </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? data.map((row, i) => (
           <tr
           key={i}
           onClick={() => onRowClick?.(row)}
           className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 cursor-pointer"
         >
           {columns.map((col) => {
             const value = row[col.responseKey];
             return (
               <td key={String(col.responseKey)} className="px-4 py-2 whitespace-nowrap">
                 {value !== undefined && value !== null ? String(value) : ''}
               </td>
             );
           })}
         </tr>
          )) : (
            <tr>
               <td colSpan={columns.length}  className="px-4 py-2 text-center"> No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default Table;