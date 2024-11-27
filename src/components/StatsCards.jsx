export default function StatsCards(){
  const stats = [
    { label: "New Projects", value: "102", color: "bg-green-500" },
    { label: "New Customers", value: "154", color: "bg-blue-500" },
    { label: "Inquiry", value: "524", color: "bg-purple-500" },
    { label: "Earning", value: "$2,453", color: "bg-orange-500" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-7">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 text-white rounded-lg shadow ${stat.color}`}
        >
          <h4 className="text-lg font-semibold">{stat.label}</h4>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};


