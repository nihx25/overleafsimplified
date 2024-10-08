export default String.raw`
                \usepackage[default]{sourcesanspro}
                \pagestyle{fancy}
                \fancyhf{} 
                \fancyfoot{}
                \renewcommand{\headrulewidth}{0pt}
                \renewcommand{\footrulewidth}{0pt}
                \addtolength{\oddsidemargin}{-0.6in}
                \addtolength{\evensidemargin}{-0.5in}
                \addtolength{\textwidth}{1.19in}
                \addtolength{\topmargin}{-.7in}
                \addtolength{\textheight}{1.4in}

                \urlstyle{same}

                \raggedbottom
                \raggedright
                \setlength{\tabcolsep}{0in}
                \titleformat{\section}{
                \vspace{-4pt}\scshape\raggedright\large\bfseries
                }{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]
                \pdfgentounicode=1
                \newcommand{\resumeItem}[1]{
                \item\small{
                    {#1 \vspace{-2pt}}
                }
                }

                \newcommand{\classesList}[4]{
                    \item\small{
                        {#1 #2 #3 #4 \vspace{-2pt}}
                }
                }

                \newcommand{\resumeSubheading}[4]{
                \vspace{-2pt}\item
                    \begin{tabular*}{1.0\textwidth}[t]{l@{\extracolsep{\fill}}r}
                    \textbf{#1} & \textbf{\small #2} \\
                    \textit{\small #3} & \textit{\small #4} \\
                    \end{tabular*}
                }

                \newcommand{\resumeSubSubheading}[2]{
                    \item
                    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
                    \textit{\small#1} & \textit{\small #2} \\
                    \end{tabular*}\vspace{-7pt}
                }

                \newcommand{\resumeProjectHeading}[2]{
                    \item
                    \begin{tabular*}{1.001\textwidth}{l@{\extracolsep{\fill}}r}
                    \small#1 & \textbf{\small #2}\\
                    \end{tabular*}\vspace{-7pt}
                }

                \newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

                \renewcommand\labelitemi{$\vcenter{\hbox{\tiny$\bullet$}}$}
                \renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

                \newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.0in, label={}]}
                \newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
                \newcommand{\resumeItemListStart}{\begin{itemize}}
                \newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}
                    `;
