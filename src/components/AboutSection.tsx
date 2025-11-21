import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Target, Sparkles, Heart, Lightbulb, Trophy, Users } from "lucide-react";

export function AboutSection() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* About Me Card */}
      <Card className="border-emerald-100 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            I am a driven professional with a passion for innovation and excellence. 
            With a strong background in technology and leadership, I thrive on solving 
            complex problems and creating meaningful impact through my work.
          </p>
          <p className="text-gray-700">
            My expertise spans across multiple domains, combining technical skills with 
            strategic thinking to deliver results that matter. I believe in continuous 
            learning and pushing boundaries to achieve extraordinary outcomes.
          </p>
          <div className="pt-4">
            <h4 className="text-gray-900 mb-3">Core Skills</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">Leadership</Badge>
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">Project Management</Badge>
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">Strategic Planning</Badge>
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">Team Building</Badge>
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">Innovation</Badge>
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">Problem Solving</Badge>
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">Communication</Badge>
              <Badge variant="outline" className="border-emerald-600 text-emerald-700">Data Analysis</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Highlighted Accomplishments */}
      <Card className="border-emerald-100 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            Highlighted Accomplishments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Leadership Excellence</h4>
                <p className="text-gray-600">
                  Led cross-functional teams to deliver high-impact projects, 
                  resulting in measurable improvements in efficiency and outcomes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Innovation & Strategy</h4>
                <p className="text-gray-600">
                  Developed and implemented innovative solutions that transformed 
                  business processes and drove significant growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Mentorship & Development</h4>
                <p className="text-gray-600">
                  Mentored and developed emerging talent, building strong teams 
                  capable of tackling complex challenges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1">Community Impact</h4>
                <p className="text-gray-600">
                  Actively contributed to community initiatives and programs 
                  that create lasting positive change.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* My Journey */}
      <Card className="border-emerald-100 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-emerald-600" />
            My Journey
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            My professional journey has been defined by a passion for making a difference 
            and a commitment to continuous growth. From early experiences that shaped my 
            values to the challenges that tested my resilience, each step has contributed 
            to who I am today.
          </p>
          <p>
            I believe that success is not just about personal achievement, but about lifting 
            others along the way. This philosophy has guided my career decisions and inspired 
            me to take on roles where I can create meaningful impact.
          </p>
          <p>
            Throughout my career, I've learned that the most rewarding work comes from 
            combining expertise with empathy, strategy with creativity, and ambition with 
            purpose. These principles continue to drive everything I do.
          </p>
        </CardContent>
      </Card>

      {/* Values */}
      <Card className="border-emerald-100 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-emerald-600" />
            What Drives Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                <Trophy className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-gray-900">Excellence</h4>
              <p className="text-gray-600">
                Striving for excellence in every endeavor, never settling for mediocrity, 
                and always pushing to exceed expectations.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-gray-900">Collaboration</h4>
              <p className="text-gray-600">
                Building strong teams and fostering environments where everyone can 
                contribute their best work and grow together.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-gray-900">Innovation</h4>
              <p className="text-gray-600">
                Embracing new ideas and approaches, challenging the status quo, and 
                finding creative solutions to complex problems.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-gray-900">Impact</h4>
              <p className="text-gray-600">
                Creating meaningful change that benefits others, whether through work, 
                mentorship, or community involvement.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote or Philosophy */}
      <Card className="border-emerald-100 shadow-md bg-gradient-to-br from-emerald-50 to-white">
        <CardContent className="pt-6">
          <blockquote className="text-center space-y-4">
            <p className="text-gray-800 italic text-lg">
              "Success is not just about what you accomplish, but about what you inspire 
              others to do. The greatest impact comes from empowering others to reach 
              their full potential."
            </p>
            <footer className="text-emerald-600">
              — Personal Philosophy
            </footer>
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
