import React from "react";
import { TechnicalSkillData } from "../types/portfolioTypes";
import { motion } from "framer-motion";
import Technology from "./Technology";
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
                className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="p-8">
                  {/* Object declaration */}
                  <div className="font-mono text-sm mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
                        {String(index).padStart(2, "0")}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400">
                        const
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.category.replace(/\s+/g, "")}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        =
                      </span>
                      <span className="text-yellow-600 dark:text-yellow-400">
                        {"["}
                      </span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="pl-4 space-y-4">
                    {/* Skills */}
                    <div className="font-mono text-sm">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {skill.skills.map((item, idx) => {
                          const IconComponent = skillIcons[item];
                          return (
                            <Technology
                              key={idx}
                              name={item}
                              variant="code"
                              icon={IconComponent}
                              showComma={false}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Closing bracket */}
                  <div className="font-mono text-sm mt-6">
                    <span className="text-yellow-600 dark:text-yellow-400">
                      {"]"}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">,</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
