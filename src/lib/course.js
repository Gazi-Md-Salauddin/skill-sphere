export const getCourses = async (search) =>{
    const res = await fetch('https://skill-sphere-virid.vercel.app/data.json');
    // const res = await fetch("http://localhost:3000/data.json");
    const courses = await res.json();

    if(!search) return courses;
    return courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );
}