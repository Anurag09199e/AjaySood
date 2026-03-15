export interface Specialty {
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    metaDescription: string;
    heroImage: string;
    heroGradient: string;
    icon: string; // emoji used as fallback
    category: string;
    intro: string;
    stats: { value: string; label: string }[];
    conditions: { name: string; desc: string }[];
    procedures: string[];
    whyChooseUs: { heading: string; body: string }[];
    faqs: { q: string; a: string }[];
    relatedSlugs: string[];
}

const specialtiesData: Specialty[] = [
    {
        slug: "cancer-care",
        title: "Veterinary Cancer Care",
        shortTitle: "Cancer Care",
        tagline: "Compassionate oncology — fighting cancer alongside your pet",
        metaDescription:
            "DD's MaxxPet Clinic Veterinary Centre offers advanced cancer care for pets in Faridabad, including diagnosis, chemotherapy, and surgical oncology with 15+ years of expertise.",
        heroImage:
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.85) 0%,rgba(0,102,102,0.72) 60%,rgba(0,51,51,0.90) 100%)",
        icon: "🏥",
        category: "Oncology",
        intro:
            "A cancer diagnosis in your pet is life-changing — but it doesn't have to mean hopelessness. At DD's MaxxPet Clinic Veterinary Centre, our oncology team brings 15+ years of surgical and medical expertise to help diagnose, manage, and treat various forms of cancer in dogs, cats, and exotic pets. We focus on maximising your pet's quality of life at every stage of treatment.",
        stats: [
            { value: "15+", label: "Years Experience" },
            { value: "Early", label: "Detection Focus" },
            { value: "Gentle", label: "Recovery Protocols" },
            { value: "5k+", label: "Pets Treated" },
        ],
        conditions: [
            { name: "Mast Cell Tumours", desc: "Most common skin tumours in dogs, staged and managed with surgery and chemotherapy." },
            { name: "Lymphoma", desc: "Systemic cancer affecting lymph nodes, treated with multi-drug chemotherapy protocols." },
            { name: "Osteosarcoma", desc: "Aggressive bone cancer requiring surgical and palliative management." },
            { name: "Mammary Tumours", desc: "Common in unspayed females; early surgical removal improves outcomes significantly." },
            { name: "Splenic Masses", desc: "Sudden internal tumours often requiring emergency splenectomy." },
            { name: "Oral Tumours", desc: "Melanomas, fibrosarcomas, and squamous cell carcinomas of the mouth and jaw." },
        ],
        procedures: [
            "Fine Needle Aspiration (FNA) & Cytology",
            "Tumour Biopsy & Histopathology",
            "Surgical Tumour Excision",
            "Chemotherapy Administration",
            "Staging & Imaging",
            "Palliative & Comfort Care",
            "Post-surgery Wound Management",
        ],
        whyChooseUs: [
            { heading: "Experienced Oncology Team", body: "Dr. Dheeraj Gaur, an NYU-trained orthopaedic and surgical specialist, leads our oncology cases with decades of cancer surgery experience." },
            { heading: "Minimally Invasive Options", body: "Where possible, we use laparoscopic and endoscopic approaches to reduce recovery time and post-operative pain." },
            { heading: "In-house Pathology Lab", body: "Rapid tumour diagnostics are processed in our own pathological laboratory, cutting down wait times significantly." },
            { heading: "Personalised Care Plans", body: "Every patient receives a tailored treatment and monitoring plan, with full transparency throughout the process." },
        ],
        faqs: [
            { q: "How do I know if my pet has cancer?", a: "Common warning signs include unexplained lumps, weight loss, loss of appetite, difficulty swallowing, persistent sores, and unusual bleeding. An early vet visit for any of these symptoms is crucial." },
            { q: "Is chemotherapy safe for pets?", a: "Yes — pet chemotherapy is generally better tolerated than in humans. Most dogs and cats experience minimal side effects and maintain a good quality of life during treatment." },
            { q: "What is the survival rate for pet cancer?", a: "This varies widely by cancer type and stage. Early detection dramatically improves outcomes. Many pets enjoy months to years of good-quality life post-treatment." },
            { q: "Does DD's MaxxPet Clinic offer palliative care?", a: "Absolutely. We prioritise comfort, dignity, and pain management alongside curative options, tailoring care to what's best for your pet and family." },
        ],
        relatedSlugs: ["neurology", "minimally-invasive", "orthopaedics"],
    },
    {
        slug: "cardiology",
        title: "Veterinary Cardiology",
        shortTitle: "Cardiology",
        tagline: "Keeping your pet's heart beating strong",
        metaDescription:
            "Expert veterinary cardiology in Faridabad at DD's MaxxPet Clinic. We diagnose and manage heart disease in pets including murmurs, arrhythmias, and congestive heart failure.",
        heroImage:
            "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.82) 0%,rgba(0,102,102,0.70) 60%,rgba(0,51,51,0.88) 100%)",
        icon: "❤️",
        category: "Cardiology",
        intro:
            "Heart disease is one of the leading causes of illness in senior pets. At DD's MaxxPet Clinic Veterinary Centre, our cardiology services help detect, diagnose, and manage heart conditions early — so your pet can live a fuller, more comfortable life. From routine auscultation to managing advanced congestive heart failure, we cover all aspects of pet cardiac health.",
        stats: [
            { value: "ECG", label: "Diagnostics" },
            { value: "Early", label: "Detection Key" },
            { value: "All Breeds", label: "At Risk" },
            { value: "15+", label: "Years Experience" },
        ],
        conditions: [
            { name: "Mitral Valve Disease (MVD)", desc: "The most common heart disease in small breed dogs causing progressive valve degeneration." },
            { name: "Dilated Cardiomyopathy (DCM)", desc: "Enlargement of the heart muscle common in large breeds like Dobermans and Great Danes." },
            { name: "Congestive Heart Failure (CHF)", desc: "Advanced heart disease causing fluid accumulation and breathing difficulty." },
            { name: "Heart Murmurs", desc: "Abnormal blood flow sounds that may indicate underlying valve or structural problems." },
            { name: "Arrhythmias", desc: "Irregular heartbeat patterns detected via ECG that may require medication or monitoring." },
            { name: "Pericardial Effusion", desc: "Fluid around the heart requiring prompt drainage and management." },
        ],
        procedures: [
            "Cardiac Auscultation & Examination",
            "Electrocardiogram (ECG / EKG)",
            "Chest X-ray (Thoracic Radiography)",
            "Pericardiocentesis (Fluid Drainage)",
            "Cardiac Medication Management",
            "Oxygen Therapy & Emergency Stabilisation",
            "Long-term Monitoring Plans",
        ],
        whyChooseUs: [
            { heading: "Early Detection Saves Lives", body: "Routine cardiac screening during wellness visits allows us to catch murmurs and early-stage disease before symptoms appear." },
            { heading: "Comprehensive Diagnostics", body: "We combine auscultation, X-rays, and ECG on-site to build a complete cardiac picture without multiple clinic hops." },
            { heading: "Lifelong Management", body: "Heart disease is manageable. We create long-term medication and lifestyle plans that keep your pet comfortable for years." },
            { heading: "Calm, Stress-Free Environment", body: "Stress worsens cardiac conditions. Our clinic is designed to be a low-stress environment for anxious or frail pets." },
        ],
        faqs: [
            { q: "Which dog breeds are most prone to heart disease?", a: "Cavalier King Charles Spaniels, Dachshunds, Poodles, Dobermans, Great Danes, and Boxers have higher genetic predispositions to various cardiac conditions." },
            { q: "Can heart disease be cured in pets?", a: "Most heart disease in pets is managed rather than cured, but with medication and monitoring, many pets live comfortably for years after diagnosis." },
            { q: "How often should my senior pet have a cardiac check?", a: "We recommend annual cardiac evaluations for all dogs and cats over 7 years, and every 6 months for breeds predisposed to heart disease." },
            { q: "What are signs of heart problems in my pet?", a: "Watch for coughing (especially at night), rapid or laboured breathing, exercise intolerance, fainting, weight loss, and a swollen abdomen." },
        ],
        relatedSlugs: ["neurology", "cancer-care", "physiotherapy"],
    },
    {
        slug: "orthopaedics",
        title: "Veterinary Orthopaedics",
        shortTitle: "Orthopaedics",
        tagline: "Restoring mobility, relieving pain, and getting your pet moving again",
        metaDescription:
            "DD's MaxxPet Clinic provides expert veterinary orthopaedic surgery in Faridabad — fractures, ligament repairs, hip dysplasia, spinal surgery, and more by NYU-trained surgeon Dr. Dheeraj Gaur.",
        heroImage:
            "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.80) 0%,rgba(0,102,102,0.68) 50%,rgba(0,51,51,0.88) 100%)",
        icon: "🦴",
        category: "Surgery",
        intro:
            "Our orthopaedic surgery department is led by Dr. Dheeraj Gaur — India's most experienced veterinary orthopaedic surgeon, NYU-trained and a recipient of the Lifetime Achievement Award 2016. Whether your pet has suffered a fracture, torn a ligament, or is living with degenerative joint disease, our team delivers precise surgical and non-surgical solutions designed to restore full function and eliminate pain.",
        stats: [
            { value: "NYU", label: "Trained Surgeon" },
            { value: "2016", label: "Lifetime Award" },
            { value: "38+", label: "Years in Surgery" },
            { value: "All Species", label: "Treated" },
        ],
        conditions: [
            { name: "Fractures & Dislocations", desc: "Traumatic breaks requiring plating, pinning, or external fixation for complete healing." },
            { name: "Cruciate Ligament Tears (CCL/ACL)", desc: "Knee instability common in active and overweight dogs, treated with TPLO or TTA surgery." },
            { name: "Hip Dysplasia", desc: "Malformed hip joints causing chronic pain and lameness, managed surgically or conservatively." },
            { name: "Elbow Dysplasia", desc: "Developmental elbow abnormalities in young large-breed dogs requiring early intervention." },
            { name: "Intervertebral Disc Disease (IVDD)", desc: "Spinal disc herniations causing nerve compression, treated medically or surgically." },
            { name: "Luxating Patella", desc: "Knee cap dislocation causing lameness and hopping gait, corrected surgically." },
        ],
        procedures: [
            "Fracture Plating, Pinning & External Fixation",
            "TPLO & TTA (Cruciate Ligament Repair)",
            "Triple Pelvic Osteotomy (TPO) for Hip Dysplasia",
            "Femoral Head & Neck Ostectomy (FHO)",
            "Patella Luxation Repair",
            "Spinal Decompression & Disc Surgery",
            "Arthroscopy (Joint Camera Examination)",
            "Post-op Physiotherapy Plans",
        ],
        whyChooseUs: [
            { heading: "India's Most Experienced Vet Orthopaedic Surgeon", body: "Dr. Dheeraj Gaur completed advanced orthopaedic training at New York University and has performed thousands of orthopaedic surgeries over 15+ years." },
            { heading: "Advanced Surgical Facilities", body: "Our fully equipped surgical theatre features modern implant systems, anaesthesia monitoring, and sterile protocols." },
            { heading: "Comprehensive Post-Op Recovery", body: "In-house physiotherapy and home care guidance ensure your pet returns to full activity safely and quickly." },
            { heading: "Transparent Second Opinions", body: "We welcome second-opinion consultations for complex orthopaedic cases referred from other hospitals." },
        ],
        faqs: [
            { q: "How do I know if my dog needs orthopaedic surgery?", a: "Lameness, limping, inability to bear weight, swelling, crying out when touched, or sudden collapse are all signs to seek urgent orthopaedic evaluation." },
            { q: "How long is recovery after orthopaedic surgery?", a: "Recovery varies by procedure — fracture repairs may take 8–12 weeks while ligament repairs can require 3–6 months of restricted activity and physiotherapy." },
            { q: "Is hip dysplasia painful for my dog?", a: "Yes. Hip dysplasia causes chronic, progressive pain. Early intervention — whether surgical or medical — significantly improves quality of life." },
            { q: "Can cats get orthopaedic problems too?", a: "Yes — cats commonly suffer fractures (especially from falls), luxating patellas, and spinal injuries. We treat cats and small animals regularly." },
        ],
        relatedSlugs: ["physiotherapy", "minimally-invasive", "cancer-care"],
    },
    {
        slug: "minimally-invasive",
        title: "Minimally Invasive Surgery",
        shortTitle: "Minimally Invasive",
        tagline: "Smaller incisions. Faster recovery. Better outcomes.",
        metaDescription:
            "DD's MaxxPet Clinic offers minimally invasive veterinary surgery in Faridabad — laparoscopy, endoscopy, and keyhole procedures that cut recovery time and reduce pain for your pet.",
        heroImage:
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.83) 0%,rgba(0,102,102,0.70) 55%,rgba(0,51,51,0.90) 100%)",
        icon: "🔬",
        category: "Surgery",
        intro:
            "Minimally invasive surgery (MIS) at DD's MaxxPet Clinic Veterinary Centre represents the gold standard of modern veterinary care. Instead of traditional large incisions, we use tiny camera-guided instruments to perform surgeries inside the body — drastically reducing trauma, pain, post-operative complications, and recovery time. Your pet goes home sooner, heals faster, and suffers less.",
        stats: [
            { value: "80%", label: "Less Post-op Pain" },
            { value: "2x", label: "Faster Recovery" },
            { value: "Tiny", label: "Incisions" },
            { value: "Modern", label: "Equipment" },
        ],
        conditions: [
            { name: "Routine Spay (Laparoscopic)", desc: "Minimally invasive ovariectomy with 2 tiny ports instead of a large incision." },
            { name: "Bladder Stones", desc: "Cystoscopic laser lithotripsy to break and remove bladder stones without open surgery." },
            { name: "Gastrointestinal Foreign Bodies", desc: "Endoscopic retrieval of swallowed objects from the stomach or oesophagus." },
            { name: "Liver & Spleen Biopsies", desc: "Laparoscopic organ biopsies for diagnosis without open exploratory surgery." },
            { name: "Adrenal Tumours", desc: "Laparoscopic adrenalectomy as an alternative to invasive open surgery." },
            { name: "Abdominal Exploration", desc: "Full-view camera inspection of abdominal organs for definitive diagnosis." },
        ],
        procedures: [
            "Laparoscopic Spay & Neuter",
            "Laparoscopic-assisted Gastropexy (GDV prevention)",
            "Cystoscopy & Bladder Stone Removal",
            "Upper & Lower GI Endoscopy",
            "Laparoscopic Liver & Spleen Biopsy",
            "Bronchoscopy (Airway Evaluation)",
            "Rhinoscopy (Nasal Passage Exam)",
            "Thoracoscopy (Chest Cavity Examination)",
        ],
        whyChooseUs: [
            { heading: "Genuine Keyhole Expertise", body: "Minimally invasive surgery requires specialised training and equipment. Our team has performed hundreds of laparoscopic and endoscopic procedures." },
            { heading: "Same-day Procedures", body: "Most minimally invasive procedures are completed in a day, with pets going home the same evening or the next morning." },
            { heading: "Significantly Less Pain", body: "Studies consistently show that pets undergoing MIS experience 50–80% less post-operative pain compared to conventional open surgery." },
            { heading: "Reduced Infection Risk", body: "Smaller incisions mean dramatically reduced risk of infection, herniation, and wound complications." },
        ],
        faqs: [
            { q: "What is laparoscopy in pets?", a: "Laparoscopy uses a tiny camera (laparoscope) inserted through a small port to view and operate inside the abdomen, replacing large open incisions." },
            { q: "Is my pet a candidate for minimally invasive surgery?", a: "Most healthy pets are candidates. However, some conditions or patient size may require conventional surgery. We assess each case individually." },
            { q: "How much does laparoscopic spay cost vs. conventional spay?", a: "Laparoscopic procedures typically cost more due to equipment and expertise requirements, but recovery is faster and complications are fewer — often saving money long-term." },
            { q: "How soon can my pet go home after MIS?", a: "Most laparoscopic procedures allow same-day or next-morning discharge. Activity restrictions are generally much shorter than after open surgery." },
        ],
        relatedSlugs: ["orthopaedics", "cancer-care", "dental-care"],
    },
    {
        slug: "ophthalmology",
        title: "Veterinary Ophthalmology",
        shortTitle: "Ophthalmology",
        tagline: "Protecting your pet's precious vision for life",
        metaDescription:
            "DD's MaxxPet Clinic Veterinary Centre provides expert eye care for pets in Faridabad — cataracts, glaucoma, corneal ulcers, cherry eye, and more with specialist-level diagnostics.",
        heroImage:
            "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.82) 0%,rgba(0,102,102,0.72) 55%,rgba(0,51,51,0.88) 100%)",
        icon: "👁️",
        category: "Speciality",
        intro:
            "Your pet's eyes are irreplaceable — and eye conditions can deteriorate rapidly without prompt, expert treatment. DD's MaxxPet Clinic Veterinary Centre provides comprehensive ophthalmological services for dogs, cats, and exotic animals. From routine eye infections to complex surgical conditions like cataracts and glaucoma, our team offers accurate diagnostics and effective treatments to preserve your pet's vision and comfort.",
        stats: [
            { value: "Fast", label: "Diagnosis" },
            { value: "Surgery", label: "Available" },
            { value: "All Ages", label: "Treated" },
            { value: "Gentle", label: "Exam Approach" },
        ],
        conditions: [
            { name: "Cataracts", desc: "Clouding of the lens causing impaired vision, surgically correctable with phacoemulsification." },
            { name: "Glaucoma", desc: "Raised intraocular pressure causing blindness and severe pain if untreated immediately." },
            { name: "Corneal Ulcers", desc: "Painful surface wounds on the eye requiring urgent medical or surgical intervention." },
            { name: "Cherry Eye", desc: "Prolapse of the third eyelid gland in young dogs, corrected surgically." },
            { name: "Dry Eye (KCS)", desc: "Keratoconjunctivitis sicca — insufficient tear production causing chronic irritation." },
            { name: "Entropion & Ectropion", desc: "Eyelid malformations causing lashes to irritate the eye surface, corrected surgically." },
        ],
        procedures: [
            "Full Ophthalmic Examination",
            "Tonometry (Intraocular Pressure Measurement)",
            "Schirmer Tear Test (Tear Production Evaluation)",
            "Fluorescein Staining (Corneal Ulcer Detection)",
            "Cataract Surgery (Phacoemulsification)",
            "Cherry Eye Repair",
            "Eyelid Surgery (Entropion/Ectropion Correction)",
            "Enucleation (Eye Removal) When Necessary",
        ],
        whyChooseUs: [
            { heading: "Prompt Eye Emergencies", body: "Eye conditions like glaucoma and corneal perforations are emergencies. We prioritise rapid assessment and treatment to save your pet's sight." },
            { heading: "Full Diagnostic Toolkit", body: "Tonometry, tear testing, and slit-lamp-equivalent examinations are all available in-house for a comprehensive eye assessment." },
            { heading: "Surgical Expertise", body: "From straightforward cherry eye repairs to complex cataract surgery, our team is experienced in the full range of ophthalmic procedures." },
            { heading: "Breed-Specific Awareness", body: "Brachycephalic breeds (Pugs, Bulldogs, Shih Tzus) need specialised eye care. We are highly experienced in their unique ocular challenges." },
        ],
        faqs: [
            { q: "How do I know if my pet has an eye problem?", a: "Signs include redness, discharge, cloudy eyes, squinting, pawing at the face, excessive tearing, or bumping into things — all warrant prompt examination." },
            { q: "Are eye conditions in pets painful?", a: "Many are. Glaucoma, corneal ulcers, and infections cause significant pain. Prompt treatment not only preserves vision but also provides relief." },
            { q: "Can cataracts in dogs be treated?", a: "Yes — surgical phacoemulsification can restore vision in many pets with cataracts. Early intervention before inflammation sets in gives better outcomes." },
            { q: "Which breeds are most prone to eye problems?", a: "Pugs, Bulldogs, Persian cats, Cocker Spaniels, Shar Peis, and Siberian Huskies are among the most predisposed to ocular conditions." },
        ],
        relatedSlugs: ["neurology", "dental-care", "exotic-pets"],
    },
    {
        slug: "neurology",
        title: "Veterinary Neurology",
        shortTitle: "Neurology",
        tagline: "Expert care for the brain, spinal cord, and nervous system",
        metaDescription:
            "DD's MaxxPet Clinic offers advanced veterinary neurology in Faridabad — spinal disc disease, seizures, brain tumours, vestibular disease, and nerve disorders in dogs and cats.",
        heroImage:
            "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.84) 0%,rgba(0,102,102,0.73) 55%,rgba(0,51,51,0.90) 100%)",
        icon: "🧠",
        category: "Neurology",
        intro:
            "Neurological conditions in pets — from sudden paralysis to recurring seizures — require rapid, expert assessment and precise treatment. At DD's MaxxPet Clinic Veterinary Centre, our neurology team evaluates and manages disorders of the brain, spinal cord, and peripheral nervous system. Whether your pet has collapsed, lost coordination, or started having fits, we provide the diagnostic workup and treatment plan your pet needs.",
        stats: [
            { value: "Rapid", label: "Neurological Assessment" },
            { value: "Spinal", label: "Surgery Expertise" },
            { value: "Seizure", label: "Management" },
            { value: "15+", label: "Years Experience" },
        ],
        conditions: [
            { name: "Intervertebral Disc Disease (IVDD)", desc: "Disc herniations pressing on the spinal cord causing pain, weakness, or paralysis." },
            { name: "Epilepsy & Seizures", desc: "Recurring abnormal brain activity managed with long-term anticonvulsant therapy." },
            { name: "Wobbler Syndrome", desc: "Cervical spinal cord compression in large breeds causing an unsteady gait." },
            { name: "Vestibular Disease", desc: "Sudden loss of balance, head tilt, and nystagmus — can mimic stroke but often resolves." },
            { name: "Degenerative Myelopathy", desc: "Progressive spinal cord degeneration in older large breeds, requiring physiotherapy management." },
            { name: "Brain Tumours", desc: "Primary and secondary tumours affecting the brain, diagnosed and palliatively managed." },
        ],
        procedures: [
            "Full Neurological Examination",
            "Spinal Surgery & Decompression",
            "Myelography (Spinal Contrast Imaging)",
            "Cerebrospinal Fluid (CSF) Tap & Analysis",
            "Seizure Workup & EEG Evaluation",
            "Long-term Anticonvulsant Management",
            "Physiotherapy for Neurological Patients",
            "Palliative Neurological Care",
        ],
        whyChooseUs: [
            { heading: "Emergency Spinal Surgery", body: "Pets with acute disc herniation and paralysis need surgery within 24–48 hours. We can assess and operate urgently to maximise recovery chances." },
            { heading: "Systematic Diagnostic Approach", body: "We use a thorough neurological exam combined with imaging and lab tests to definitively localise the problem before treatment." },
            { heading: "Seizure Management Expertise", body: "From first seizure workup to ongoing phenobarbitone monitoring, we provide complete, long-term seizure management support." },
            { heading: "Physiotherapy Integration", body: "Our physiotherapy team works closely with neurology to rehabilitate paralysed and paretic patients back to walking." },
        ],
        faqs: [
            { q: "My dog suddenly can't walk — what should I do?", a: "This is a neurological emergency. Do not wait. Get to a vet immediately. Sudden paralysis from IVDD has the best surgical outcome when treated within 24–48 hours." },
            { q: "Is epilepsy common in pets?", a: "Yes — epilepsy affects about 1–2% of dogs. Most epileptic pets live full lives with proper anticonvulsant medication management." },
            { q: "How is IVDD treated?", a: "Mild cases may respond to strict rest and anti-inflammatory medication. Severe cases with significant weakness or paralysis almost always require surgical decompression." },
            { q: "Can vestibular disease be cured?", a: "Most cases of idiopathic vestibular disease resolve on their own within 2–4 weeks with supportive care." },
        ],
        relatedSlugs: ["orthopaedics", "physiotherapy", "cancer-care"],
    },
    {
        slug: "exotic-pets",
        title: "Exotic Pet Veterinary Care",
        shortTitle: "Exotic Pets",
        tagline: "Specialist care for birds, reptiles, rabbits, and small mammals",
        metaDescription:
            "DD's MaxxPet Clinic Veterinary Centre in Faridabad offers specialist exotic pet care for rabbits, guinea pigs, parrots, reptiles, turtles, ferrets, and more.",
        heroImage:
            "https://images.unsplash.com/photo-1591160690555-5debfba71a80?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.82) 0%,rgba(0,102,102,0.70) 55%,rgba(0,51,51,0.88) 100%)",
        icon: "🦜",
        category: "Exotic",
        intro:
            "Exotic pets have unique physiology, specialised nutritional needs, and often hide illness until they are critically unwell. At DD's MaxxPet Clinic Veterinary Centre, we have extensive experience treating a broad range of non-traditional pets. From routine health check-ups for your rabbit to emergency care for your parrot or dietary guidance for your tortoise — we treat every patient with species-appropriate expertise and genuine care.",
        stats: [
            { value: "10+", label: "Species Treated" },
            { value: "Birds", label: "Reptiles & Mammals" },
            { value: "Nutrition", label: "Specialist Advice" },
            { value: "Gentle", label: "Handling Expertise" },
        ],
        conditions: [
            { name: "Rabbit GI Stasis", desc: "Life-threatening cessation of gut movement, requiring urgent medical intervention." },
            { name: "Avian Respiratory Disease", desc: "Breathing difficulties in birds caused by air sac infections, bacteria, or fungi." },
            { name: "Reptile Metabolic Bone Disease", desc: "Calcium and UV deficiency disorders causing deformities and fractures in lizards and turtles." },
            { name: "Guinea Pig Dental Disease", desc: "Dental malocclusion and overgrown teeth causing eating difficulties and weight loss." },
            { name: "Ferret Adrenal Disease", desc: "Adrenal gland tumours causing hair loss and behavioural changes in ferrets." },
            { name: "Bird Psittacosis (Parrot Fever)", desc: "Bacterial infection transmissible to humans, requiring prompt diagnosis and treatment." },
        ],
        procedures: [
            "Exotic Animal Physical Examination",
            "Species-Specific Blood Panels",
            "Avian Gram Stain & Microbiology",
            "Rabbit Dental Procedures",
            "Reptile Nutritional Counselling",
            "Small Mammal Surgery (Spay, Neuter, Tumour Removal)",
            "Fluid Therapy for Exotic Species",
            "Feather Destructive Behaviour Assessment",
        ],
        whyChooseUs: [
            { heading: "Wide Species Experience", body: "We routinely see rabbits, guinea pigs, hamsters, gerbils, parrots, cockatiels, canaries, tortoises, lizards, snakes, and ferrets." },
            { heading: "Species-Appropriate Anaesthesia", body: "Exotic patients require carefully tailored anaesthetic protocols — a critical area where experience matters enormously." },
            { heading: "Nutritional Guidance", body: "Incorrect diet is the root cause of most exotic pet health problems. We provide detailed, species-specific dietary guidance at every visit." },
            { heading: "Emergency Exotic Care", body: "We recognise that exotic pets deteriorate rapidly. We prioritise urgent appointments for critically ill exotic patients." },
        ],
        faqs: [
            { q: "Can you treat my rabbit?", a: "Yes, absolutely. We regularly provide health checks, dental procedures, spay/neuter, GI stasis treatment, and other medical care for rabbits." },
            { q: "How often should I bring my parrot for a check-up?", a: "Annual wellness exams are recommended for birds. Birds hide illness well, so regular professional evaluations are important for catching problems early." },
            { q: "My tortoise hasn't eaten in weeks — is that normal?", a: "It depends on temperature and season, but prolonged anorexia warrants an exam. Reptiles can develop serious illness quickly when not eating properly." },
            { q: "Do you see snakes and lizards?", a: "Yes — we see a range of reptile species. Bring your reptile in a secure, ventilated container and maintain appropriate temperature during transport." },
        ],
        relatedSlugs: ["dental-care", "ophthalmology", "physiotherapy"],
    },
    {
        slug: "dental-care",
        title: "Veterinary Dental Care",
        shortTitle: "Dental Care",
        tagline: "Healthy teeth, healthy pet — dental wellness at every age",
        metaDescription:
            "DD's MaxxPet Clinic offers professional veterinary dentistry in Faridabad — dental cleaning, tooth extractions, oral surgery, and periodontal disease treatment for dogs and cats.",
        heroImage:
            "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.82) 0%,rgba(0,102,102,0.68) 55%,rgba(0,51,51,0.88) 100%)",
        icon: "🦷",
        category: "Dental",
        intro:
            "Dental disease is the most common health condition in adult dogs and cats — over 80% of pets over 3 years show some form of oral disease. Yet it often goes unnoticed until pain and infection are severe. At DD's MaxxPet Clinic Veterinary Centre, our dental services include professional cleaning, oral health assessment, dental surgery, and home care guidance to keep your pet's mouth pain-free and healthy for life.",
        stats: [
            { value: "80%", label: "Pets have Dental Disease" },
            { value: "Annual", label: "Cleaning Recommended" },
            { value: "Under GA", label: "Safe Procedures" },
            { value: "Pain-Free", label: "Recovery" },
        ],
        conditions: [
            { name: "Periodontal Disease", desc: "The most common dental condition — tartar, gum recession, and tooth loss progressing in stages." },
            { name: "Tooth Resorption (Cats)", desc: "Painful erosion of tooth structure in cats, requiring extraction under anaesthesia." },
            { name: "Fractured Teeth", desc: "Broken teeth from trauma or chewing hard objects — causing pain and pulp infection." },
            { name: "Stomatitis", desc: "Severe, widespread oral inflammation causing extreme pain and difficulty eating." },
            { name: "Epulides & Oral Tumours", desc: "Gum growths varying from benign to malignant, requiring biopsy and removal." },
            { name: "Malocclusion", desc: "Bite abnormalities causing teeth to impinge on soft tissue, especially in brachycephalic breeds." },
        ],
        procedures: [
            "Professional Dental Scaling & Polishing",
            "Full Mouth Dental X-rays",
            "Tooth Extractions (Simple & Surgical)",
            "Root Canal Therapy",
            "Oral Mass Removal & Biopsy",
            "Periodontal Surgery & Gingival Flaps",
            "Jaw Fracture Repair",
            "Home Dental Care Education",
        ],
        whyChooseUs: [
            { heading: "Full Mouth X-rays as Standard", body: "We X-ray the entire mouth at every dental procedure — the only way to detect sub-gingival pathology that is invisible to the naked eye." },
            { heading: "Safe Anaesthesia Protocols", body: "All our dental procedures are performed under general anaesthesia with full monitoring — the only humane and effective way to clean below the gum line." },
            { heading: "Pain Management Priority", body: "We use local nerve blocks and multimodal analgesia to ensure your pet wakes up comfortable and recovers smoothly." },
            { heading: "Home Care Training", body: "We teach you evidence-based home dental care techniques — including tooth brushing — to maintain your pet's oral health between professional cleanings." },
        ],
        faqs: [
            { q: "How often does my pet need a dental cleaning?", a: "Most pets benefit from professional cleaning every 12–18 months. Small breeds and cats often need more frequent treatment as they are more prone to severe dental disease." },
            { q: "Is dental anaesthesia safe for my pet?", a: "Yes — with proper pre-anaesthetic bloodwork, monitoring, and modern anaesthetic agents, dental procedures under GA are very safe even for older pets." },
            { q: "My pet still eats normally — can they still have dental pain?", a: "Absolutely. Pets are stoic and rarely stop eating even in significant pain. Bad breath, drooling, or pawing at the mouth are signs of dental disease." },
            { q: "Can I brush my dog's teeth at home?", a: "Yes, and we encourage it! Daily brushing with pet-safe toothpaste is the single most effective way to prevent plaque buildup. We'll show you how." },
        ],
        relatedSlugs: ["exotic-pets", "cancer-care", "minimally-invasive"],
    },
    {
        slug: "physiotherapy",
        title: "Veterinary Physiotherapy",
        shortTitle: "Physiotherapy",
        tagline: "Rehabilitation that gets your pet back on their feet",
        metaDescription:
            "DD's MaxxPet Clinic offers expert veterinary physiotherapy in Faridabad — post-surgical rehabilitation, hydrotherapy alternatives, pain management, and mobility restoration for pets.",
        heroImage:
            "https://images.unsplash.com/photo-1596710104445-b4618e478eb0?auto=format&fit=crop&w=1920&q=80",
        heroGradient:
            "linear-gradient(135deg,rgba(0,51,51,0.80) 0%,rgba(0,102,102,0.68) 55%,rgba(0,51,51,0.88) 100%)",
        icon: "💪",
        category: "Rehabilitation",
        intro:
            "Veterinary physiotherapy is an evidence-based discipline that uses targeted physical exercises, massage, therapeutic modalities, and movement training to restore function and relieve pain in pets. At DD's MaxxPet Clinic, our physiotherapy programme is deeply integrated with our surgical and neurology departments — ensuring every patient who undergoes orthopaedic or spinal surgery receives a tailored, supervised rehabilitation programme to maximise their recovery.",
        stats: [
            { value: "Post-op", label: "Rehab Programs" },
            { value: "Senior", label: "Pet Speciality" },
            { value: "Non-invasive", label: "Pain Management" },
            { value: "IVDD", label: "Recovery Expert" },
        ],
        conditions: [
            { name: "Post-surgical Rehabilitation", desc: "Structured recovery programmes after orthopaedic or spinal surgery to restore full mobility." },
            { name: "Spinal Cord Injury Recovery", desc: "Step-by-step neurological rehabilitation for paralysed or paretic pets — including assisted walking exercises." },
            { name: "Osteoarthritis Management", desc: "Weight-bearing exercise, joint mobilisation, and pain management for arthritic senior pets." },
            { name: "Muscle Wastage (Atrophy)", desc: "Progressive strengthening exercises to rebuild muscle mass after illness, surgery, or disuse." },
            { name: "Obesity-related Mobility Issues", desc: "Low-impact exercise programmes designed for overweight pets to improve mobility and facilitate weight loss." },
            { name: "Degenerative Myelopathy", desc: "Targeted physiotherapy shown to significantly slow progression and maintain mobility in affected pets." },
        ],
        procedures: [
            "Initial Physiotherapy Assessment",
            "Passive Range of Motion (PROM) Exercises",
            "Therapeutic Massage",
            "Proprioception & Balance Training",
            "Assisted Walking & Sling Support",
            "Transcutaneous Electrical Nerve Stimulation (TENS)",
            "Heat & Cold Therapy",
            "Home Exercise Programme Design & Teaching",
        ],
        whyChooseUs: [
            { heading: "Integrated Surgical-Rehab Approach", body: "Our surgeons and physiotherapists work as a team — rehabilitation begins the day after surgery for optimal outcomes." },
            { heading: "Neurological Rehab Expertise", body: "Rehabbing paralysed or paretic pets requires patience, consistency, and expertise. We create realistic recovery timelines and celebrate every milestone." },
            { heading: "Home Programme Design", body: "We design personalised home exercise programmes so owners can continue rehab between clinic visits safely and effectively." },
            { heading: "Senior Pet Focus", body: "Physiotherapy dramatically improves quality of life for arthritic or weak senior pets — often more gently and sustainably than medication alone." },
        ],
        faqs: [
            { q: "How soon after surgery can physiotherapy start?", a: "Physiotherapy typically begins 24–48 hours post-surgery with gentle passive exercises. An active programme commences once surgical healing allows." },
            { q: "Can physiotherapy help my paralysed dog walk again?", a: "Physiotherapy plays a critical role in neurological recovery. Dogs with deep pain sensation intact have the best prognosis. Many paralysed dogs do walk again with sustained physiotherapy." },
            { q: "Is physiotherapy painful for my pet?", a: "No — all exercises are adapted to your pet's comfort level. Most pets find sessions relaxing, and sessions are always stopped if any discomfort is noted." },
            { q: "Does my pet need a referral for physiotherapy?", a: "No formal referral is needed. You can book a physiotherapy assessment directly. We will co-ordinate with your regular vet as needed." },
        ],
        relatedSlugs: ["orthopaedics", "neurology", "cardiology"],
    },
];

export default specialtiesData;
