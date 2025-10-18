
function DynamicDashboard() {
// 1. Dynamic Greeting
const userName = 'Thu';
// 2. Conditional Content
const isPremium = true; 
// 3. Render a Task List (array of objects)
const tasks = [
{ taskName: 'Buy groceries', completed: true },
{ taskName: 'Finish project report', completed: false },
{ taskName: 'Call Mom', completed: true },
];
// Stretch goal: Date display
const today = new Date().toLocaleDateString();
// Stretch goal: counts
const completedCount = tasks.filter((t) => t.completed).length;
const incompleteCount = tasks.length - completedCount;


return (
<div className="dashboard">
    <div className="date">{today}</div>
    {/* Dynamic Greeting */}
    <h1>Hello, {userName}!</h1>

    {/* Conditionals */}
    <p className="membership-msg">
        {isPremium
        ? 'Thank you for being a premium member!'
        : 'Upgrade to premium to enjoy exclusive features!'}
    </p>


    {/* Task List rendered with map() */}
    <ul className="task-list">
        {tasks.map((t, idx) => (
          <li key={idx} style={{ color: t.completed ? 'green' : undefined }}>
            {t.completed ? '\u2705' : '\u274C'} {t.taskName}
          </li>
        ))}
      </ul>

    {/* Task counts */}
    <div className="task-counts">
    Completed: <strong>{completedCount}</strong> — Incomplete: <strong>{incompleteCount}</strong>
    </div>
</div>
);
}

export default DynamicDashboard;