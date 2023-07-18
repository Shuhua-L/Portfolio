import React from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";

type Props = {};

const projectsInfo = `What I've built...`;
const colors = ["pink", "purple", "orange"];

const Projects = (props: Props) => {
  return (
    // container
    <div className='container max-w-7xl mx-auto my-0 px-10 lg:px-16 py-28 md:py-40'>
      <h1>Projects</h1>
      {/* <p className='max-w-prose'>{projectsInfo}</p> */}

      <div className='flex flex-col items-center justify-center relative gap-10 lg:gap-20'>
        {/* content */}
        {projects.map((project, idx) => {
          return (
            <div
              className='text-center md:text-left rounded-lg shadow-lg flex flex-wrap items-center'
              key={idx}>
              <div className='block w-4/5 mx-auto shrink-0 grow-0 basis-auto md:w-1/2 lg:flex'>
                <Image
                  src={project.screenshots[0].url}
                  alt={project.screenshots[0].alt}
                  width={500}
                  height={600}
                  className='w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg'
                />
              </div>
              <div className='w-full shrink-0 grow-0 basis-auto md:w-1/2  mt-0'>
                <div className='px-6 lg:pe-12 pb-6 lg:py-12'>
                  <h2 className='prose-h2:mb-3 font-bold tracking-tight'>
                    {project.title}
                    {/* <Link
                          className='text-gray-900 dark:text-gray-100'
                          href={project.links.code}>
                          {project.title}
                        </Link> */}
                  </h2>
                  <div className='flex flex-wrap justify-around space-x-3 max-w-full'>
                    {project.techStack.map((tech, idx) => {
                      return (
                        <span key={idx} className={`text-${colors[idx % 3]} text-sm font-medium `}>
                          #{tech}
                        </span>
                      );
                    })}
                  </div>
                  <p className='mb-6 pb-2 prose-grey'>{project.description}</p>
                  {project.links?.live && (
                    <Link
                      type='button'
                      href={project.links.live}
                      target='__blank'
                      className='inline-block rounded-lg px-7 pb-2.5 pt-3 text-sm font-medium leading-normal shadow-md'>
                      Live
                    </Link>
                  )}
                  {project.links?.code && (
                    <Link
                      type='button'
                      target='__blank'
                      href={project.links.code}
                      className='inline-block rounded-lg px-7 pb-2.5 pt-3 text-sm font-medium leading-normal shadow-md'>
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
