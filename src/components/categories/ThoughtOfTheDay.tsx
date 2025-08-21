import { CategoryCard } from "@/components/CategoryCard";

export const ThoughtOfTheDay = () => {
  return (
    <CategoryCard title="Thought of the Moment">
      <h1 className="border-b border-border pb-2 mb-4">2025</h1>
      <div>
        <h3>8/21 Lock in?</h3>
        <p>Is locking in for like a deep sprint (like 1+ week) actually worth it? Because like every sprint I go on, I end up feeling like I didn't accomplish enough and when I'm out of the sprint, I feel like everything I do is on an inadequate timeline (like I am doing work too slowly).</p>
        <p>I have also come to realize I am a massively momentum focused person. Like if I am going off on work, I am going to do an insane amount, but the moment I stop I can't get back to it.</p>
      </div>
       <div className="space-y-3">
        <h3>8/21 Task Room</h3>
        <p>I wish there was a room like an escape room, but instead of escaping from there, you have to like accomplish a task. Like launch a rocket or run a restaunt or something. Like you know the people that are in tv shows, I want to do that in real life. Maybe with less theatrics but it would be cool to have that experience.</p>
      </div>
    </CategoryCard>
  );
}; 