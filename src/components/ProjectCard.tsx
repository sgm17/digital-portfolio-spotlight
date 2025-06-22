import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  name: string;
  users: string;
  revenue: string;
  image: string;
  description: string;
}

const ProjectCard = ({
  id,
  name,
  users,
  revenue,
  image,
  description,
}: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${id}`}
      className="block bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="aspect-video bg-gray-800 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain bg-white"
        />
      </div>

      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="space-y-1">
          <p className="text-white text-sm font-medium">{users} Users</p>
          <p className="text-gray-400 text-sm">{revenue}/month</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
