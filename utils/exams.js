export const exams = {
  list: [
    {

      id: '1',
      abbr: 'IP',
      fullname: 'IT Passport '
    },

    {
      id: '2',
      abbr: 'FE',
      fullname: 'Fundamental IT Engineer '
    },

    {
      id: '3',
      abbr: 'AP',
      fullname: 'Applied IT Engineer '
    }

  ]
};


export const questions = {
  FE: [
    {
      "_id": "60afe32f07bef76aaa17b130",
      "text": "   When  the  decimal  arithmetic  expression,  7  /  32,  is  evaluated,  which  of  the  following  represents the result in binary?",
      "answers": ["0.001011", "0.001101", "0.00111", "0.0111"],
      "correctAnswer": "2"
    },

    {
      "_id": "60afe45607bef76aaa17b132",
      "text": " A factory manufactures the same products on two production lines, A and B. Line Amanufactures 60% of all products, and B manufactures the remaining 40%. Defect rates of products  manufactured  in A and  in  B  are  2%  and  1%,  respectively. When a product was randomly chosen for inspection among the products manufactured in this factory, it was found to be defective. What is the percentage of probability that the product was manufactured in Line A?",
      "answers": ["40", "50", "60", "75"],
      "correctAnswer": "3"
    },

    {
      "_id": "60afe54507bef76aaa17b133",
      "text": " For an 8-bit code with the most significant bit as its parity bit, which of the following is used to obtain the lower seven (7) bits other than parity?",
      "answers": ["Perform a bitwise AND operation with 0F in hexadecimal", "Perform a bitwise AND operation with 7F in hexadecimal", "Perform a bitwise OR operation with 0F in hexadecimal ", "Perform a bitwise XOR (exclusive OR) operation with FF in hexadecimal "],
      "correctAnswer": "1"
    },

    {
      "_id": "60afe63e07bef76aaa17b136",
      "text": "In  machine  learning,  which  of  the  following  is  an  appropriate  explanation  of  supervised  learning? ",
      "answers": ["Clusterizing input data according to the statistical features or specific conditions of the data without any explicit processing beforehand ", "Learning to achieve the highest score from rating good and bad aspects of individual actions ", "Predicting a subsequent user action from the frequency of appearances of behavioral data accumulated from computer users ", "Training by feeding input data and their correct output so that the response to unknown data is improved "],
      "correctAnswer": "3"
    },

    {
      "_id": "60afe6cc07bef76aaa17b137",
      "text": "Which of the following is a description of quicksort algorithm? ",
      "answers": ["It repeats the process of comparing and swapping each pair of adjacent elements so that smaller elements are gradually moved towards the end.", "It repeats the process of finding the minimum element of the data, followed by its removal.", "It repeats the process of inserting each element of data into the correct position of a sorted sequence.", "It repeats the process of selecting an element as a pivot and partitions the data so that smaller elements appear before the pivot, and larger elements appear afterwards"],
      "correctAnswer": "3"
    },

    {
      "_id": "60afe76707bef76aaa17b138",
      "text": "Which of the following causes an external interrupt?",
      "answers": ["Notification of elapsed time by a timer", "The execution of a division-by-zero instruction", "The execution of a non-existent operation code", "The occurrence of a page fault"],
      "correctAnswer": "0"
    },

    {
      "_id": "60afe7ee07bef76aaa17b139",
      "text": "Which of the following is an appropriate explanation of a device driver?",
      "answers": ["Software to control peripheral devices that are connected to a PC", "Software to install an application on a PC", "Software to invade another PC and cause damage", "Software to register the operation procedures for a keyboard or other devices and to automate this operation"],
      "correctAnswer": "0"
    },

    {
      "_id": "60afe83907bef76aaa17b13a",
      "text": "ECC is used for error detection and correction in memory. When n+2 redundant bits are required for a data bus having a width of 2n bits, what is the number of redundant bits that are required for a data bus having a width of 128 bits?",
      "answers": ["3", "8", "9", "10"],
      "correctAnswer": "2"
    },

    {
      "_id": "60afe88807bef76aaa17b13b",
      "text": "Which of the following achieves data redundancy via mirroring?",
      "answers": ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
      "correctAnswer": "1"
    },

    {
      "_id": "60afe90607bef76aaa17b13c",
      "text": "Which  of  the  following  is  an  appropriate  description  of  the  dispatcher  in  an  operating  system?",
      "answers": ["A function in which multiple tasks appear to be running simultaneously on a single processor", "The allocation of the right to use a processor for a ready process", "The context that is the information required for process execution", "The determination of the order of execution for each proces"],
      "correctAnswer": "1"
    },

    {
      "_id": "60afe95d07bef76aaa17b13d",
      "text": "Among the processes that are performed by a compiler for a procedural language, which of the following is the process that is performed first?",
      "answers": ["Lexical analysis", "Optimization ", "Semantic analysis", "Syntactic analysis (parsing)"],
      "correctAnswer": "0"
    },

    {
      "_id": "60afe9b307bef76aaa17b13e",
      "text": "Which of the following is an appropriate description of DRAM?",
      "answers": ["It is memory that requires a refresh operation, and it is used as the main memory of a PC.", "It is non-volatile memory of a NAND type or a NOR type, and it is used as an SSD.", "It is non-volatile memory that is capable of erasing and writing data in byte units, and it is used when data need to be retained even when the power supply is turned off.", "Its memory cells consist of flip-flops, and it is used for cache memory."],
      "correctAnswer": "0"
    },

    {
      "_id": "60afea1707bef76aaa17b13f",
      "text": "Which of the following is a secondary (rechargeable) battery?",
      "answers": ["Alkaline–manganese dry-cell battery", "Fuel cell", "Lithium-ion battery", "Silver-oxide battery"],
      "correctAnswer": "2"
    },

    {
      "_id": "60afeaa107bef76aaa17b140",
      "text": "Which of the following is an appropriate usage of radio buttons in GUI applications?",
      "answers": ["To select multiple items from a group of items", "To select one item from a group of mutually exclusive items", "To select one item from a list or to enter new item into a text box", "To select one item from a list that is displayed when a button is pressed"],
      "correctAnswer": "1"
    },

    {
      "_id": "60afeae207bef76aaa17b141",
      "text": "Which of the following is a method of improving the appearance of a jagged edge of a slanted line to be smoothed on a screen, such as that of an LCD?",
      "answers": ["Anti-aliasing", "Bump mapping", "Shading", "Texture mapping"],
      "correctAnswer": "0"
    },

    {
      "_id": "60afeb2907bef76aaa17b142",
      "text": "When a failure occurs in a storage unit that stores a database, which of the following is an operation that can recover the database by using backup files and a log?",
      "answers": ["Archive", "Checkpoint dump", "Commit", "Rollforward"],
      "correctAnswer": "3"
    },

    {
      "_id": "60afebb807bef76aaa17b143",
      "text": "Which of the following is a device that connects multiple LANs by relaying data through the protocol information of the data link layer of the OSI basic reference model?",
      "answers": ["Bridge", "Gateway", "Repeater", "Router"],
      "correctAnswer": "0"
    },

    {
      "_id": "60afebff07bef76aaa17b144",
      "text": "What is the broadcast address of a network to which the IP address 192.168.57.123/22 belongs?",
      "answers": ["192.168.55.255", "192.168.57.255", "192.168.59.255", "192.168.63.255"],
      "correctAnswer": "2"
    },

    {
      "_id": "60afec4707bef76aaa17b145",
      "text": "Which of the following is an Internet standard that extends the format of email header fields to handle not only text messages but also audio and image file?",
      "answers": ["HTML", "MSH", "MINE", "SMTP"],
      "correctAnswer": "2"
    },

    {
      "_id": "60afec8207bef76aaa17b146",
      "text": "Which of the following is a type of public-key cryptography that utilizes the difficulty of factorizing extremely large numbers into primes?",
      "answers": ["AES", "DH", "DSA", "RSA"],
      "correctAnswer": "3"
    }

  ],

  IP: [
    {
      "_id": "607d3b951f9a2311b976411a",
      "text": "When a chairperson and a secretary are selected from three (3) candidates with a method  that allows dual roles, from the three (3) candidates, there are three (3) combinations for  the selection of a single chairperson and three (3) combinations for the selection of a  secretary, so in total, there are nine (9) combinations for the selection of a chairperson  and a secretary. When a chairperson and a secretary are selected from five (5) candidates  with a method that allows dual roles, how many combinations for the selection are there?",
      "answers":
        ["5", "10", "20", "25"],
      "correctAnswer": "3"
    },

    {
      "_id": "607d57c63758c7c63b809d42",
      "text": "Which of the following is always true for two (2) sets A and B? Here, (X ∩ Y) represents the part that belongs to both X and Y (intersection set), and (X ∪ Y) represents the part that belongs to at least one of X or Y (union set).",
      "answers":
        [
          "(A ∪ B) is a subset of the complement of (A ∩ B).",
          "(A ∪ B) is a subset of A.",
          "(A ∩ B) is a subset of (A ∪ B).",
          "(A ∩ B) is a subset of the complement of A."],
      "correctAnswer": "2"
    },

    {
      "_id": "607d59ab3758c7c63b809d43",
      "text": "In a queue, three elements 33, 27, and 12 are enqueued in this order. After the element  45 is enqueued to this queue, two (2) elements are retrieved (or dequeued). Which of  the following is the second element to be retrieved? ",
      "answers": ["12", "27", "33", "45"],
      "correctAnswer": "1"
    },

    {
      "_id": "607d5a7c8d2296e6a042bb41",
      "text": "Which of the following is an appropriate description concerning HTML? ",
      "answers": ["It is a markup language that can specify the logical structure and layout of a Web page  by using tags. ", "It is a script language that can describe the program or processing steps executed on a  browser. ", "It is a communication protocol that is used between a browser and a Web server. ", "It is a markup language that enables users to describe the meaning and structure of  data by defining their own unique tags. "],
      "correctAnswer": "0"
    },

    {
      "_id": "607d5ad88d2296e6a042bb42",
      "text": "Which of the following is an appropriate description concerning the Java language?",
      "answers": ["It is a markup language used for describing Web pages. ", "It is a language developed for scientific and engineering calculations.", "It is an object-oriented language that provides platform-independent portability.", "It is a language developed for business-oriented calculations. "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d5bc58d2296e6a042bb44",
      "text": "Which of the following is the appropriate description concerning a device driver that  enables the use of peripheral equipment with a PC?",
      "answers": ["When a hard disk drive is initialized and the operating system is reinstalled, it is  necessary to reinstall device drivers that were installed separately to the operating  system. ", "When new application software is installed, it is necessary to reinstall all device  drivers that this software uses. ", "Even if a device driver is no longer required, a user cannot delete the device driver  once it is installed.", "If only one (1) device driver for a printer is installed, all printers can be used  regardless of manufacturer or model. "],
      "correctAnswer": "0"
    },

    {
      "_id": "607d5c108d2296e6a042bb45",
      "text": "Which of the following is an appropriate description of the cache memory of a CPU?",
      "answers": ["The size of cache memory is greater than or equal to the size of main memory. ", "Cache memory is used to reduce the effective access time of main memory. ", "On computers with a large main memory, there is no effect of cache memory. ", "In order to increase the hit rate, the user specifies the frequently used programs to  be resident in cache memory. "],
      "correctAnswer": "1"
    },

    {
      "_id": "607d5c668d2296e6a042bb46",
      "text": "Which of the following is appropriate as a description concerning Plug and Play?",
      "answers": ["When a peripheral device is connected to a PC, installation and settings of the device  driver are performed automatically. ", "Software for enhancing the functions of application software is installed separately.", "Power is supplied from a PC to a peripheral device via a cable connected to the  peripheral device. ", "A specific program is executed, and the system performance is evaluated on the basis  of the time taken for the processing. "],
      "correctAnswer": "0"
    },

    {
      "_id": "607d5cf98d2296e6a042bb47",
      "text": "Which of the following is an explanation of the reliability index that is calculated by  the expression:  MTBF / (MTBF + MTTR))",
      "answers": ["Average time until a system failure occurs ", "Average time taken to recover a system after a failure", "Proportion of the operation time of a system to the total time", "Proportion of the downtime of a system to the total time "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d5d8d8d2296e6a042bb48",
      "text": "When the types of programs that are executed when a PC is started are broadly classified  into three categories, namely BIOS (Basic Input Output System), OS, and resident  application program, which of the following is the order of execution of the programs? ",
      "answers": ["BIOS, OS, resident application program", "OS, BIOS, resident application program", "OS, resident application program, BIOS ", "Resident application program, BIOS, OS"],
      "correctAnswer": "0"
    },

    {
      "_id": "607d5ded8d2296e6a042bb49",
      "text": "Which of the following is an advantage of using OSS (Open Source Software)?",
      "answers": ["Technical support is provided free of charge from the developer at the time of  installation. ", "The software is not prone to infection of viruses, as the source code is not released. ", "Compensation can be received for damages caused by defects in the software. ", "The source code can be modified to fit the environment of the user in accordance  with the license conditions. "],
      "correctAnswer": "3"
    },

    {
      "_id": "607d5e898d2296e6a042bb4a",
      "text": "Which of the following is an appropriate combination of software that includes only  OSS (Open Source Software)? ",
      "answers": ["Internet Explorer, Linux, PostgreSQL", "Internet Explorer, PostgreSQL, Windows ", "Firefox, Linux, Thunderbird", "Firefox, Thunderbird, Windows "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d5ed98d2296e6a042bb4b",
      "text": "Which of the following is an appropriate description concerning the OS for PCs?",
      "answers": ["Each PC allows only one (1) type of OS to be installed and run on it. ", "There is no OS for PCs equipped with a 64-bit CPU. ", "When an OS is upgraded to a new version, all of the software operating with the old  version of the OS cannot be used any more. ", "There exist some OSs for PCs that can be started up by using an external storage  device, such as a CD-ROM and USB memory, other than the hard disk. "],
      "correctAnswer": "3"
    },

    {
      "_id": "607d62138d2296e6a042bb4c",
      "text": "Which of the following is the appropriate merit of server virtualization?",
      "answers": ["It enables a single computer to be run like it was multiple servers, so it enables the  flexible distribution of physical resources in response to demand. ", "A server is built by plugging the required number of blades that have a computer  function into a chassis, so the number of machines can be flexibly increased and  decreased. ", "The computers that constitute a server are used without being connected to other  servers, so security can be improved. ", "Multiple computers that constitute a server perform the same processing and the  results of the processing are cross-checked against each other, so reliability can be  improved. "],
      "correctAnswer": "0"
    },

    {
      "_id": "607d62778d2296e6a042bb4d",
      "text": "Which of the following is an input method where a touch panel is operated by  touching it in two or more locations simultaneously?",
      "answers": ["Touch type", "Double click", "Multitask", "Multi-touch "],
      "correctAnswer": "3"
    },

    {
      "_id": "607d62d78d2296e6a042bb4e",
      "text": "On a display screen, various colors are created through additive color mixing with three  colors, namely red, green, and blue. When the red, green, and blue are mixed evenly,  which of the following colors is formed?",
      "answers": ["Red-violet ", "Yellow", "White", "Green rust "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d64f28d2296e6a042bb4f",
      "text": "In a relational database, which of the following is the reason for a primary key being  specified? ",
      "answers": ["To clearly indicate that something is not subject to an arithmetic operation", "To enable the search of the column that is specified as the primary key ", "To prevent reference from another table ", "To enable any record in the table to be uniquely identified"],
      "correctAnswer": "3"
    },

    {
      "_id": "607d656e8d2296e6a042bb50",
      "text": "Sales data is to be managed with tables in a relational database. When the tables for sales  data are designed, which of the following activities analyzes the relationship between  the fields of the tables and decompose the tables so that there are no duplications or  inconsistencies in the data?",
      "answers": ["Join", "Projection", "Normalization", "Exclusive control "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d9ce50c4471817b738f76",
      "text": "Which of the following is an appropriate description about association of records for a  relational database?",
      "answers": ["Records in multiple tables are associated at the same row position relative to the first  row in each of the tables.", "Records in multiple tables are associated through the values of corresponding fields.", "Records are associated with one another by a pointer that represents the parentage. ", "Records are associated with one another by a hash function. "],
      "correctAnswer": "1"
    },

    {
      "_id": "607d9ce50c4491817b758f76",
      "text": "Which of the following is an appropriate description about association of records for a  relational database?",
      "answers": ["Records in multiple tables are associated at the same row position relative to the first  row in each of the tables.", "Records in multiple tables are associated through the values of corresponding fields.", "Records are associated with one another by a pointer that represents the parentage. ", "Records are associated with one another by a hash function. "],
      "correctAnswer": "1"
    },
  ],
  AP: [
    {
      "_id": "607d3b951f9a2311b976411a",
      "text": "When a chairperson and a secretary are selected from three (3) candidates with a method  that allows dual roles, from the three (3) candidates, there are three (3) combinations for  the selection of a single chairperson and three (3) combinations for the selection of a  secretary, so in total, there are nine (9) combinations for the selection of a chairperson  and a secretary. When a chairperson and a secretary are selected from five (5) candidates  with a method that allows dual roles, how many combinations for the selection are there?",
      "answers":
        ["5", "10", "20", "25"],
      "correctAnswer": "3"
    },

    {
      "_id": "607d57c63758c7c63b809d42",
      "text": "Which of the following is always true for two (2) sets A and B? Here, (X ∩ Y) represents the part that belongs to both X and Y (intersection set), and (X ∪ Y) represents the part that belongs to at least one of X or Y (union set).",
      "answers":
        [
          "(A ∪ B) is a subset of the complement of (A ∩ B).",
          "(A ∪ B) is a subset of A.",
          "(A ∩ B) is a subset of (A ∪ B).",
          "(A ∩ B) is a subset of the complement of A."],
      "correctAnswer": "2"
    },

    {
      "_id": "607d59ab3758c7c63b809d43",
      "text": "In a queue, three elements 33, 27, and 12 are enqueued in this order. After the element  45 is enqueued to this queue, two (2) elements are retrieved (or dequeued). Which of  the following is the second element to be retrieved? ",
      "answers": ["12", "27", "33", "45"],
      "correctAnswer": "1"
    },

    {
      "_id": "607d5a7c8d2296e6a042bb41",
      "text": "Which of the following is an appropriate description concerning HTML? ",
      "answers": ["It is a markup language that can specify the logical structure and layout of a Web page  by using tags. ", "It is a script language that can describe the program or processing steps executed on a  browser. ", "It is a communication protocol that is used between a browser and a Web server. ", "It is a markup language that enables users to describe the meaning and structure of  data by defining their own unique tags. "],
      "correctAnswer": "0"
    },

    {
      "_id": "607d5ad88d2296e6a042bb42",
      "text": "Which of the following is an appropriate description concerning the Java language?",
      "answers": ["It is a markup language used for describing Web pages. ", "It is a language developed for scientific and engineering calculations.", "It is an object-oriented language that provides platform-independent portability.", "It is a language developed for business-oriented calculations. "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d5bc58d2296e6a042bb44",
      "text": "Which of the following is the appropriate description concerning a device driver that  enables the use of peripheral equipment with a PC?",
      "answers": ["When a hard disk drive is initialized and the operating system is reinstalled, it is  necessary to reinstall device drivers that were installed separately to the operating  system. ", "When new application software is installed, it is necessary to reinstall all device  drivers that this software uses. ", "Even if a device driver is no longer required, a user cannot delete the device driver  once it is installed.", "If only one (1) device driver for a printer is installed, all printers can be used  regardless of manufacturer or model. "],
      "correctAnswer": "0"
    },

    {
      "_id": "607d5c108d2296e6a042bb45",
      "text": "Which of the following is an appropriate description of the cache memory of a CPU?",
      "answers": ["The size of cache memory is greater than or equal to the size of main memory. ", "Cache memory is used to reduce the effective access time of main memory. ", "On computers with a large main memory, there is no effect of cache memory. ", "In order to increase the hit rate, the user specifies the frequently used programs to  be resident in cache memory. "],
      "correctAnswer": "1"
    },

    {
      "_id": "607d5c668d2296e6a042bb46",
      "text": "Which of the following is appropriate as a description concerning Plug and Play?",
      "answers": ["When a peripheral device is connected to a PC, installation and settings of the device  driver are performed automatically. ", "Software for enhancing the functions of application software is installed separately.", "Power is supplied from a PC to a peripheral device via a cable connected to the  peripheral device. ", "A specific program is executed, and the system performance is evaluated on the basis  of the time taken for the processing. "],
      "correctAnswer": "0"
    },

    {
      "_id": "607d5cf98d2296e6a042bb47",
      "text": "Which of the following is an explanation of the reliability index that is calculated by  the expression:  MTBF / (MTBF + MTTR))",
      "answers": ["Average time until a system failure occurs ", "Average time taken to recover a system after a failure", "Proportion of the operation time of a system to the total time", "Proportion of the downtime of a system to the total time "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d5d8d8d2296e6a042bb48",
      "text": "When the types of programs that are executed when a PC is started are broadly classified  into three categories, namely BIOS (Basic Input Output System), OS, and resident  application program, which of the following is the order of execution of the programs? ",
      "answers": ["BIOS, OS, resident application program", "OS, BIOS, resident application program", "OS, resident application program, BIOS ", "Resident application program, BIOS, OS"],
      "correctAnswer": "0"
    },

    {
      "_id": "607d5ded8d2296e6a042bb49",
      "text": "Which of the following is an advantage of using OSS (Open Source Software)?",
      "answers": ["Technical support is provided free of charge from the developer at the time of  installation. ", "The software is not prone to infection of viruses, as the source code is not released. ", "Compensation can be received for damages caused by defects in the software. ", "The source code can be modified to fit the environment of the user in accordance  with the license conditions. "],
      "correctAnswer": "3"
    },

    {
      "_id": "607d5e898d2296e6a042bb4a",
      "text": "Which of the following is an appropriate combination of software that includes only  OSS (Open Source Software)? ",
      "answers": ["Internet Explorer, Linux, PostgreSQL", "Internet Explorer, PostgreSQL, Windows ", "Firefox, Linux, Thunderbird", "Firefox, Thunderbird, Windows "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d5ed98d2296e6a042bb4b",
      "text": "Which of the following is an appropriate description concerning the OS for PCs?",
      "answers": ["Each PC allows only one (1) type of OS to be installed and run on it. ", "There is no OS for PCs equipped with a 64-bit CPU. ", "When an OS is upgraded to a new version, all of the software operating with the old  version of the OS cannot be used any more. ", "There exist some OSs for PCs that can be started up by using an external storage  device, such as a CD-ROM and USB memory, other than the hard disk. "],
      "correctAnswer": "3"
    },

    {
      "_id": "607d62138d2296e6a042bb4c",
      "text": "Which of the following is the appropriate merit of server virtualization?",
      "answers": ["It enables a single computer to be run like it was multiple servers, so it enables the  flexible distribution of physical resources in response to demand. ", "A server is built by plugging the required number of blades that have a computer  function into a chassis, so the number of machines can be flexibly increased and  decreased. ", "The computers that constitute a server are used without being connected to other  servers, so security can be improved. ", "Multiple computers that constitute a server perform the same processing and the  results of the processing are cross-checked against each other, so reliability can be  improved. "],
      "correctAnswer": "0"
    },

    {
      "_id": "607d62778d2296e6a042bb4d",
      "text": "Which of the following is an input method where a touch panel is operated by  touching it in two or more locations simultaneously?",
      "answers": ["Touch type", "Double click", "Multitask", "Multi-touch "],
      "correctAnswer": "3"
    },

    {
      "_id": "607d62d78d2296e6a042bb4e",
      "text": "On a display screen, various colors are created through additive color mixing with three  colors, namely red, green, and blue. When the red, green, and blue are mixed evenly,  which of the following colors is formed?",
      "answers": ["Red-violet ", "Yellow", "White", "Green rust "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d64f28d2296e6a042bb4f",
      "text": "In a relational database, which of the following is the reason for a primary key being  specified? ",
      "answers": ["To clearly indicate that something is not subject to an arithmetic operation", "To enable the search of the column that is specified as the primary key ", "To prevent reference from another table ", "To enable any record in the table to be uniquely identified"],
      "correctAnswer": "3"
    },

    {
      "_id": "607d656e8d2296e6a042bb50",
      "text": "Sales data is to be managed with tables in a relational database. When the tables for sales  data are designed, which of the following activities analyzes the relationship between  the fields of the tables and decompose the tables so that there are no duplications or  inconsistencies in the data?",
      "answers": ["Join", "Projection", "Normalization", "Exclusive control "],
      "correctAnswer": "2"
    },

    {
      "_id": "607d9ce50c4471817b738f76",
      "text": "Which of the following is an appropriate description about association of records for a  relational database?",
      "answers": ["Records in multiple tables are associated at the same row position relative to the first  row in each of the tables.", "Records in multiple tables are associated through the values of corresponding fields.", "Records are associated with one another by a pointer that represents the parentage. ", "Records are associated with one another by a hash function. "],
      "correctAnswer": "1"
    },

    {
      "_id": "607d9ce50c4491817b758f76",
      "text": "Which of the following is an appropriate description about association of records for a  relational database?",
      "answers": ["Records in multiple tables are associated at the same row position relative to the first  row in each of the tables.", "Records in multiple tables are associated through the values of corresponding fields.", "Records are associated with one another by a pointer that represents the parentage. ", "Records are associated with one another by a hash function. "],
      "correctAnswer": "1"
    },
  ]
};