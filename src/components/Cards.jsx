
const Cards = () => {
    const notices = [
        { name: "Airi Satou", message: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.", time: "7 hours ago", color: "text-green-600" },
        { name: "Sarah Smith", message: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.", time: "1 hour ago", color: "text-blue-600" },
        { name: "Cara Stevens", message: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.", time: "Yesterday", color: "text-pink-600" },
        { name: "Ashton Cox", message: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.", time: "Yesterday", color: "text-red-600" },
        { name: "Mark Hay", message: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.", time: "1 hour ago", color: "text-orange-600" },
        { name: "Jay Pandya", message: "Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.", time: "1 hour ago", color: "text-green-600" },
    ];

    const projects = [
        { name: "Project A", progress: 30, duration: "2 Months", color: "bg-red-500" },
        { name: "Project B", progress: 55, duration: "3 Months", color: "bg-blue-500" },
        { name: "Project C", progress: 67, duration: "1 Month", color: "bg-yellow-500" },
        { name: "Project D", progress: 70, duration: "2 Months", color: "bg-green-500" },
        { name: "Project E", progress: 24, duration: "3 Months", color: "bg-red-500" },
        { name: "Project F", progress: 77, duration: "4 Months", color: "bg-green-500" },
        { name: "Project G", progress: 41, duration: "2 Months", color: "bg-blue-500" },
        { name: "Project H", progress: 41, duration: "2 Months", color: "bg-blue-500" },
    ];

    const earnings = [
        { source: "envato.com", percentage: 17, color: "bg-green-500" },
        { source: "google.com", percentage: 27, color: "bg-red-500" },
        { source: "yahoo.com", percentage: 25, color: "bg-orange-500" },
        { source: "store", percentage: 18, color: "bg-blue-500" },
        { source: "Others", percentage: 13, color: "bg-purple-500" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 bg-[#000814] h-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Notice Board</h2>
                <div className="h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    <ul className="space-y-4">
                        {notices.map((notice, index) => (
                            <li key={index} className="flex items-start space-x-4">
                                <div className={`h-10 w-10 rounded-full ${notice.color} bg-opacity-30`} />
                                <div>
                                    <h3 className={`font-semibold ${notice.color}`}>{notice.name}</h3>
                                    <p className="text-sm text-gray-600">{notice.message}</p>
                                    <p className="text-xs text-gray-400">{notice.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Project Status</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="py-2">Project Name</th>
                            <th className="py-2">Progress</th>
                            <th className="py-2">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2">{project.name}</td>
                                <td className="py-2">
                                    <div className="relative w-full bg-gray-200 h-4 rounded-lg">
                                        <div
                                            className={`absolute top-0 left-0 h-4 rounded-lg ${project.color}`}
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </td>
                                <td className="py-2">{project.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold mb-4">Earning Source</h2>
                <div className="text-3xl font-bold text-gray-800 mb-4">$90,808</div>
                <ul className="space-y-4">
                    {earnings.map((earning, index) => (
                        <li key={index} className="flex items-center">
                            <span className="w-1/4">{earning.source}</span>
                            <div className="relative w-2/4 bg-gray-200 h-4 rounded-lg">
                                <div
                                    className={`absolute top-0 left-0 h-4 rounded-lg ${earning.color}`}
                                    style={{ width: `${earning.percentage}%` }}
                                ></div>
                            </div>
                            <span className="w-1/4 text-right">{earning.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cards;
