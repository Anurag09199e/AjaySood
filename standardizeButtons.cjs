const fs = require('fs');
const path = require('path');

// The bespoke classes to target
const customBtnClasses = [
  'ssub-btn', 'vsub-btn', 'prsh-btn', 'scsh-btn', 
  'psh-btn', 'vsh-btn', 'dsh-btn', 'gsh-btn', 'plan-btn', 'btn-book-v3'
];

function processCSSFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  customBtnClasses.forEach(btnClass => {
    // We want to find the block for .btnClass and .btnClass:hover
    // and remove background, background-color, color, and box-shadow
    
    // A simple regex to replace these properties if they are inside the file
    // Because CSS parsing via regex is hard, we will just remove ANY hardcoded
    // colors that match these properties in these specific files since these files
    // are tiny and purpose-built for the components.
    
    // Actually, let's just wipe the background, color, box-shadow rules completely 
    // from the blocks containing these classes.
    const blockRegex = new RegExp(`\\.${btnClass}(?::hover)?\\s*\\{([^}]+)\\}`, 'g');
    
    content = content.replace(blockRegex, (match, innerProps) => {
      let newProps = innerProps
        .replace(/background-color:[^;]+;/g, '')
        .replace(/background:[^;]+;/g, '')
        .replace(/color:[^;]+;/g, '')
        .replace(/box-shadow:[^;]+;/g, '')
        .replace(/border:[^;]+;/g, '');
      return `.${btnClass} {${newProps}}`;
    });
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated CSS: ${filePath}`);
  }
}

function processTSXFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add btn-primary to any element that has one of the custom button classes
  customBtnClasses.forEach(btnClass => {
    const classRegex = new RegExp(`className="([^"]*\\b${btnClass}\\b[^"]*)"`, 'g');
    content = content.replace(classRegex, (match, classNames) => {
      // If it doesn't already have btn, add it
      let newClasses = classNames;
      if (!newClasses.includes('btn ')) {
        newClasses = 'btn ' + newClasses;
      }
      if (!newClasses.includes('btn-primary')) {
        newClasses = newClasses.replace('btn ', 'btn btn-primary ');
      }
      return `className="${newClasses}"`;
    });
  });

  // Also catch generic buttons that are missing a variant
  // e.g. className="btn" -> className="btn btn-primary"
  content = content.replace(/className="btn"/g, 'className="btn btn-primary"');
  
  // Clean up duplicate btn btn
  content = content.replace(/btn btn /g, 'btn ');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated TSX: ${filePath}`);
  }
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (['node_modules', 'dist', 'public'].includes(entry.name)) continue;

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      if (/\.css$/i.test(entry.name)) {
        processCSSFile(fullPath);
      } else if (/\.tsx?$/i.test(entry.name)) {
        processTSXFile(fullPath);
      }
    }
  }
}

const targetDir = path.join(__dirname, 'src');
console.log(`Starting standardization in ${targetDir}`);
processDirectory(targetDir);
console.log('Done.');
