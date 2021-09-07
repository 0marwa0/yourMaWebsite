const Progress = ({ percent }) => {
  return (
    <div class="relative pt-1">
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: `${percent}` }}
          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
        ></div>
      </div>
    </div>
  );
};
export default Progress;
