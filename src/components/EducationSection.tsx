import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master's Degree / Advanced Degree",
    field: "Field of Study",
    institution: "University Name",
    location: "Location",
    year: "2020",
    highlights: [
      "Graduated with honors",
      "Focus on specialized area of study",
      "Completed thesis on relevant topic"
    ]
  },
  {
    degree: "Bachelor's Degree",
    field: "Field of Study",
    institution: "University Name",
    location: "Location",
    year: "2018",
    highlights: [
      "Dean's List recognition",
      "Leadership roles in student organizations",
      "Relevant coursework and projects"
    ]
  }
];

const certifications = [
  {
    name: "Professional Certification Name",
    issuer: "Issuing Organization",
    year: "2024"
  },
  {
    name: "Industry Certification",
    issuer: "Certifying Body",
    year: "2023"
  },
  {
    name: "Specialized Training Program",
    issuer: "Training Provider",
    year: "2022"
  }
];

export function EducationSection() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Education */}
      <Card className="border-emerald-100 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-600" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900">{edu.degree}</h3>
                  <p className="text-emerald-600 mt-1">{edu.field}</p>
                  <p className="text-gray-600 mt-1">
                    {edu.institution} • {edu.location}
                  </p>
                  <p className="text-gray-500 mt-1">Graduated: {edu.year}</p>
                  <ul className="mt-3 space-y-1 text-gray-700">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="border-emerald-100 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            Certifications & Training
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 rounded-lg border border-emerald-100 bg-emerald-50/30">
                <h4 className="text-gray-900">{cert.name}</h4>
                <p className="text-gray-600 mt-1">{cert.issuer}</p>
                <Badge variant="outline" className="mt-2 border-emerald-600 text-emerald-700">
                  {cert.year}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
