import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  GraduationCap, 
  Briefcase, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const roles = [
  {
    id: 'student',
    title: 'Student',
    description: 'Access placement opportunities, update your profile, and track your applications.',
    icon: <GraduationCap className="h-8 w-8" />,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'coordinator',
    title: 'Coordinator',
    description: 'Manage placement activities, company visits, and student registrations.',
    icon: <Users className="h-8 w-8" />,
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 'recruiter',
    title: 'Recruiter',
    description: 'Post job opportunities, review applications, and schedule interviews.',
    icon: <Briefcase className="h-8 w-8" />,
    color: 'bg-amber-100 text-amber-700'
  },
  {
    id: 'admin',
    title: 'Admin',
    description: 'Oversee the entire placement process, analytics, and system settings.',
    icon: <Shield className="h-8 w-8" />,
    color: 'bg-purple-100 text-purple-700'
  }
];

const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedRole) {
      navigate('/login', { state: { role: selectedRole } });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Role</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform serves different roles in the placement process. 
            Select your role to access the appropriate features and functions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <Card 
              key={role.id}
              className={cn(
                "border-2 cursor-pointer transition-all duration-200 hover:shadow-md",
                selectedRole === role.id 
                  ? "border-nitj-600 ring-2 ring-nitj-200" 
                  : "border-gray-200 hover:border-gray-300"
              )}
              onClick={() => setSelectedRole(role.id)}
            >
              <CardHeader>
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", role.color)}>
                  {role.icon}
                </div>
                <CardTitle>{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{role.description}</CardDescription>
              </CardContent>
              <CardFooter>
                {selectedRole === role.id && (
                  <div className="w-full text-right text-nitj-600 animate-pulse">
                    Selected
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button 
            onClick={handleContinue}
            disabled={!selectedRole}
            className="bg-nitj-600 hover:bg-nitj-700 py-6 px-8 text-lg"
          >
            Continue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;