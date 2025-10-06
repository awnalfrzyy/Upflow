import { Button } from "../ui/button";

const Card = [
    { title: "Web Designer & Developer", type: "San Francisco, CA | Full Time", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
    { title: "Frontend Engineer", type: "Remote | Contract", text: "Work with React, TypeScript, and Tailwind CSS. Build clean, scalable, and performant UIs." },
    { title: "Backend Developer", type: "New York, NY | Full Time", text: "Design scalable backend services using Node.js and collaborate closely with the frontend team." },
    { title: "UI/UX Designer", type: "Remote | Part Time", text: "Craft stunning and user-friendly designs that elevate the product experience." },
    { title: "Mobile Developer", type: "Jakarta, ID | Full Time", text: "Develop modern mobile apps using Flutter or React Native with focus on performance and UX." },
    { title: "QA Engineer", type: "Singapore | Remote", text: "Ensure the highest quality by designing and executing comprehensive testing processes." },
];


export default function SectionIntegrations() {
    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full justify-center">
                {Card.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{item.type}</p>
                            <p className="text-gray-700 text-sm mt-4 leading-relaxed">{item.text}</p>
                        </div>
                        <div className="pt-6">
                            <Button variant="outline" className="w-full">
                                Apply Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
