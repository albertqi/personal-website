const CodeIntro = () => {
    const codeIntro =
`public class Albert {
    public String name = "Albert Qi";
    public int age = LocalDate.now().getYear() - 2003;
    public String[] skills = {
        "Python", "Java", "C/C++",
        "Rust", "JavaScript/TypeScript", "Swift",
        "GraphQL", "SQL", "HTML/CSS",
        "Spring Boot", "React", "PyTorch",
    };
}`;

    return (
        <div className="bg-white rounded-lg shadow-md w-fit p-6">
            <pre className="text-dark font-mono text-sm">{codeIntro}</pre>
        </div>
    );
}

export default CodeIntro;
