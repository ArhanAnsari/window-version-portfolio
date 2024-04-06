import { IconHeart } from "@tabler/icons-react";
import Link  from "next/link";
import { AlertTitle, AlertDescription, Alert } from "../ui/alert";
export default function Experience() {
  return (
    <main className="flex flex-col gap-4 p-4">
            <Alert className="mt-2 rounded-none bg-gray-400" variant="default">
          <IconHeart className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription className="text-sm text-black">
            You can view more on my{" "}
            <a href="../../devben.pdf" download className="text-blue-900 underline">
              Resume
            </a>
            and my{" "}
            <Link href="https://www.linkedin.com/in/benlad/" className="text-blue-900 underline">
              LinkdIn
            </Link>
          </AlertDescription>
        </Alert>
      <div>
        <h1 className="text-2xl text-gray-300 underline-offset-4">
          United State of African
        </h1>
        <p className="text-gray-400">Front-end developer</p>
        <span className="text-gray-500">Texas, United State</span>
        <ul className="mt-2 flex list-disc flex-col text-gray-100">
          <li>Developing new user-facing features</li>
          <li>Determining the structure and design of web pages</li>
          <li>Building reusable codes</li>
          <li>Optimizing page loading times</li>
          <li>
            Using markup languages like HTML to create user-friendly web pages
          </li>
          <li>Maintaining and improving website</li>
          <li>• Assessing UX and UI designs for technical feasibility</li>
          <li>
            Collaborating with product team members to implement new feature
            developments
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl capitalize text-gray-300 underline-offset-4">
          HealthGo ICT FIRM
        </h1>
        <p className="text-gray-400">Front-end developer</p>
        <span className="text-gray-500">Lagos, Nigeria</span>
        <ul className="mt-2 flex list-disc flex-col text-gray-100">
          <li>
            Supporting the entire application lifecycle (concept, design, test,
            release and support)
          </li>
          <li>
            • Writing clean code to create fully functional web applications
          </li>
          <li>Gathering specific requirements and suggesting solutions</li>
          <li>Troubleshooting and debugging to optimize performance</li>
          <li>
            Using markup languages like HTML to create user-friendly web pages
          </li>
          <li>Maintaining and improving website</li>
          <li>• Assessing UX and UI designs for technical feasibility</li>
          <li>
            Collaborating with product team members to implement new feature
            developments
          </li>
        </ul>
      </div>
    </main>
  );
}
