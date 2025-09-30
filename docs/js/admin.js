// admin.js — shows a simple overlay admin UI if URL contains '?' and allows editing
(function () {
  if (!location.search.includes('?')) return; // only show admin UI when ? is in URL

  const dataKey = 'portfolio_data';
  const raw = localStorage.getItem(dataKey);
  const data = raw ? JSON.parse(raw) : {
    name: "Ayush",
    title: "DevOps Engineer | Cloud & Automation",
    about: "I build robust cloud infra, CI/CD pipelines and automations to ship reliable software faster.",
    contacts: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile",
      gmail: "mailto:yourmail@gmail.com",
      phone: "tel:+919999999999"
    },
    projects: [
      { title: "Sample Project", link: "projects/project1.html" }
    ]
  };

  function save() {
    localStorage.setItem(dataKey, JSON.stringify(data));
    alert("Saved! Refresh the page to see changes.");
  }

  // create overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.right = "20px";
  overlay.style.top = "20px";
  overlay.style.zIndex = 9999;
  overlay.innerHTML = `
  <div style="width:360px;background:#fff;border-radius:12px;padding:12px;box-shadow:0 10px 30px rgba(2,6,23,0.2);font-family:Inter,Arial">
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <strong>Admin Mode</strong>
      <button id="admin-close" style="background:#efefef;border-radius:8px;padding:6px;border:0">Close</button>
    </div>
    <div style="margin-top:10px;font-size:13px;color:#334155">
      Edit your profile & projects. Changes save to localStorage only.
    </div>

    <div style="margin-top:10px;font-size:14px">
      <label>Name</label>
      <input id="admin-name" value="${data.name}" style="width:100%;margin-top:4px;padding:6px;border:1px solid #ccc;border-radius:6px"/>
    </div>

    <div style="margin-top:10px;font-size:14px">
      <label>Title</label>
      <input id="admin-title" value="${data.title}" style="width:100%;margin-top:4px;padding:6px;border:1px solid #ccc;border-radius:6px"/>
    </div>

    <div style="margin-top:10px;font-size:14px">
      <label>About</label>
      <textarea id="admin-about" style="width:100%;margin-top:4px;padding:6px;border:1px solid #ccc;border-radius:6px">${data.about}</textarea>
    </div>

    <div style="margin-top:10px;font-size:14px">
      <label>GitHub Link</label>
      <input id="admin-github" value="${data.contacts.github}" style="width:100%;margin-top:4px;padding:6px;border:1px solid #ccc;border-radius:6px"/>
    </div>
    <div style="margin-top:10px;font-size:14px">
      <label>LinkedIn Link</label>
      <input id="admin-linkedin" value="${data.contacts.linkedin}" style="width:100%;margin-top:4px;padding:6px;border:1px solid #ccc;border-radius:6px"/>
    </div>
    <div style="margin-top:10px;font-size:14px">
      <label>Gmail</label>
      <input id="admin-gmail" value="${data.contacts.gmail}" style="width:100%;margin-top:4px;padding:6px;border:1px solid #ccc;border-radius:6px"/>
    </div>
    <div style="margin-top:10px;font-size:14px">
      <label>Phone</label>
      <input id="admin-phone" value="${data.contacts.phone}" style="width:100%;margin-top:4px;padding:6px;border:1px solid #ccc;border-radius:6px"/>
    </div>

    <div style="margin-top:10px;font-size:14px">
      <label>Projects (JSON format)</label>
      <textarea id="admin-projects" style="width:100%;margin-top:4px;padding:6px;border:1px solid #ccc;border-radius:6px;height:100px">${JSON.stringify(data.projects, null, 2)}</textarea>
    </div>

    <div style="margin-top:12px;text-align:right">
      <button id="admin-save" style="background:#2563eb;color:white;padding:6px 12px;border-radius:6px;border:0">Save</button>
    </div>
  </div>
  `;
  document.body.appendChild(overlay);

  // close button
  document.getElementById("admin-close").onclick = () => overlay.remove();

  // save button
  document.getElementById("admin-save").onclick = () => {
    data.name = document.getElementById("admin-name").value;
    data.title = document.getElementById("admin-title").value;
    data.about = document.getElementById("admin-about").value;
    data.contacts.github = document.getElementById("admin-github").value;
    data.contacts.linkedin = document.getElementById("admin-linkedin").value;
    data.contacts.gmail = document.getElementById("admin-gmail").value;
    data.contacts.phone = document.getElementById("admin-phone").value;
    try {
      data.projects = JSON.parse(document.getElementById("admin-projects").value);
    } catch (e) {
      alert("Projects JSON is invalid!");
      return;
    }
    save();
  };
})();
