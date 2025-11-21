import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const workExperience = [
  {
    title: "Senior Position Title",
    company: "Company Name",
    location: "Location",
    period: "Jan 2023 - Present",
    description: [
      "Led strategic initiatives that improved operational efficiency by 30%",
      "Managed cross-functional teams of 10+ members across multiple projects",
      "Developed and implemented innovative solutions to complex business challenges",
      "Collaborated with stakeholders to align project goals with company objectives"
    ],
    skills: ["Leadership", "Strategy", "Project Management", "Innovation"]
  },
  {
    title: "Mid-Level Position Title",
    company: "Previous Company",
    location: "Location",
    period: "Jun 2020 - Dec 2022",
    description: [
      "Spearheaded key projects resulting in significant cost savings",
      "Built and mentored high-performing teams",
      "Implemented process improvements that enhanced productivity",
      "Established strong relationships with clients and partners"
    ],
    skills: ["Team Building", "Process Improvement", "Client Relations"]
  },
  {
    title: "Early Career Position",
    company: "Another Company",
    location: "Location",
    period: "Jan 2018 - May 2020",
    description: [
      "Contributed to multiple successful project deliveries",
      "Developed expertise in core business processes",
      "Collaborated with senior team members on strategic initiatives",
      "Received recognition for outstanding performance and dedication"
    ],
    skills: ["Analysis", "Collaboration", "Execution"]
  }
];

export function WorkHistorySection() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Card className="border-emerald-100 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-600" />
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-emerald-200 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white"></div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-gray-900">{job.title}</h3>
                    <p className="text-emerald-600 mt-1">{job.company}</p>
                    <div className="flex flex-wrap gap-2 mt-2 text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-700">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-emerald-50 text-emerald-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
