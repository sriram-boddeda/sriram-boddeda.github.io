import React from "react";
import { TechnicalSkillData } from "../types/portfolioTypes";
import { motion } from "framer-motion";
import {
  CSharpIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  PythonIcon,
  JavaIcon,
  SolidityIcon,
  HTMLIcon,
  CSSIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  DotNetIcon,
  ShinyIcon,
  TailwindIcon,
  GitIcon,
  DockerIcon,
  FirebaseIcon,
  JiraIcon,
  SQLServerIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  SQLiteIcon,
  OracleSQLIcon,
  MSSQLServerIcon,
} from "@/components/icons/icons";

interface TechnicalSkillsProps {
  data: TechnicalSkillData[];
}

const iconSize = 24;

const skillIcons: { [key: string]: React.ReactNode } = {
  "C#": <CSharpIcon size={iconSize} />,
  Java: <JavaIcon size={iconSize} />,
  JavaScript: <JavaScriptIcon size={iconSize} />,
  TypeScript: <TypeScriptIcon size={iconSize} />,
  Python: <PythonIcon size={iconSize} />,
  Solidity: <SolidityIcon size={iconSize} />,
  HTML: <HTMLIcon size={iconSize} />,
  CSS: <CSSIcon size={iconSize} />,
  "React.js": <ReactIcon size={iconSize} />,
  "Next.js": <NextIcon size={iconSize} />,
  "Node.js": <NodeIcon size={iconSize} />,
  ".Net": <DotNetIcon size={iconSize} />,
  Shiny: <ShinyIcon size={iconSize} />,
  TailwindCSS: <TailwindIcon size={iconSize} />,
  Git: <GitIcon size={iconSize} />,
  Docker: <DockerIcon size={iconSize} />,
  Firebase: <FirebaseIcon size={iconSize} />,
  Jira: <JiraIcon size={iconSize} />,
  "MS SQL": <MSSQLServerIcon size={iconSize} />,
  "Oracle SQL": <OracleSQLIcon size={iconSize} />,
  MySQL: <SQLServerIcon size={iconSize} />,
  PostgreSQL: <PostgreSQLIcon size={24} />,
  MongoDB: <MongoDBIcon size={iconSize} />,
  SQLite: <SQLiteIcon size={iconSize} />,
};

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ data }) => {
  return (
    <section className="py-20 text-gray-800 dark:text-[#dcdcdc]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-mono font-semibold tracking-wider text-gray-800 dark:text-[#dcdcdc] mb-16 text-center">
            <span className="text-gray-500">{"//"}</span> Technical Skills
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((skill, index) => (
              <motion.div
                key={skill.id || index}
                className="bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-[#dcdcdc] rounded-lg shadow-lg overflow-hidden p-6 font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0px -2px 20px rgba(0,0,0,0.25)",
                }}
              >
                {/* Skill Category */}
                <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                  <span className="text-gray-800 dark:text-green-400">
                    const
                  </span>{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    {skill.category}
                  </span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-gray-500">[</span>
                </p>

                {/* Skill Icons and Names */}
                <div className="flex flex-wrap gap-y-2 gap-x-1">
                  {skill.skills.map((item, idx) => {
                    const IconComponent = skillIcons[item];
                    return (
                      <div
                        key={idx}
                        className="flex items-center bg-gray-100 dark:bg-neutral-800 rounded-md p-[4px] shadow-sm "
                      >
                        {React.isValidElement(IconComponent) &&
                          React.cloneElement(IconComponent)}
                        <span className="ml-2 text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                        {idx !== skill.skills.length - 1 ? "," : ""}
                      </div>
                    );
                  })}
                </div>

                {/* Closing bracket */}
                <p className="text-base font-medium text-blue-600 dark:text-blue-400 mt-2">
                  <span className="text-gray-500">];</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
