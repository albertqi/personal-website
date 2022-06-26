const CodeIntro = () => {
    const codeIntro =
`public class Albert {
    public String name = "Albert Qi";
    public int age = LocalDate.now().getYear() - 2003;
    public String[] skills =
        {"Java", "JavaScript", "TypeScript", "Python", "C++", "OCaml",
        "React", "Angular", "Flask", "Firebase", "Swift",
        "PostgreSQL", "TailwindCSS", "HTML"};
}`;

    return (
        <div className="bg-white rounded-lg shadow-md w-fit p-6">
            <pre className="text-dark font-mono text-sm">{codeIntro}</pre>
        </div>
    );
}

export default CodeIntro;