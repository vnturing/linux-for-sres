# Linux for SREs Resources

## Knowledge

- [Article: "Linux Performance Analysis in 60,000 Milliseconds", Netflix TechBlog](https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55)
  The ten-command first-minute checklist with real production output. Use for: lesson 3, vmstat, mpstat, iostat, sar reading.
- [Reference: "USE Method: Linux Performance Checklist", Brendan Gregg](https://brendangregg.com/USEmethod/use-linux.html)
  Resource-by-resource list of Linux metrics for utilization, saturation, and errors. Use for: lessons 2 and 4 to 7, the USE matrix.
- [Article: "Linux Crisis Tools", Brendan Gregg](https://brendangregg.com/blog/2024-03-24/linux-crisis-tools.html)
  The case for pre-installing diagnostic tools, with package names, and a worked outage scenario. Use for: lessons 3 and 11.
- [Article: "Linux Load Averages: Solving the Mystery", Brendan Gregg](http://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html)
  Why Linux load includes uninterruptible tasks. Use for: lesson 4.
- [Slides: "Linux Performance Tools", Brendan Gregg, Velocity 2015](https://www.brendangregg.com/Slides/Velocity2015_LinuxPerfTools.pdf)
  Methodologies (problem statement, USE, workload characterization) before tools. Use for: lesson 1.
- [Book chapter: "Effective Troubleshooting", Site Reliability Engineering (Google)](https://sre.google/sre-book/effective-troubleshooting/)
  Troubleshooting as a learnable, teachable process. Use for: lesson 1 and general method.
- [Book: Site Reliability Engineering, table of contents](https://sre.google/sre-book/table-of-contents/)
  Chapters on emergency response, incident management, and postmortems. Use for: lesson 11.
- [Kernel docs: PSI, Pressure Stall Information](https://www.kernel.org/doc/html/latest/accounting/psi.html)
  Format and meaning of /proc/pressure files. Use for: lessons 4 to 6.
- [Man page: proc_meminfo(5)](https://man7.org/linux/man-pages/man5/proc_meminfo.5.html)
  Definition of MemAvailable and every other meminfo field. Use for: lesson 5.
- [Man page: systemd.service(5)](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
  Service unit directives, restart policy, exit status handling. Use for: lesson 8.
- [Zine: "Linux debugging tools you'll love", Julia Evans](https://wizardzines.com/zines/debugging/)
  Friendly introductions to strace, perf, tcpdump, and more. Use for: lessons 7 and 9.
- [Book: "Your Linux Toolbox", Julia Evans (No Starch Press)](https://nostarch.com/linuxtoolbox)
  Box set of illustrated Linux zines. Use for: lesson 10, shell fluency.

## Wisdom (Communities)

- [SadServers](https://sadservers.com/)
  Real broken Linux servers with automatic checks, aimed at SRE and DevOps practice and interview preparation. Use for: the capstone, timed practice.
- [SREcon, USENIX](https://www.usenix.org/srecon)
  The main SRE conference series; talks are open for study. Use for: seeing how experienced teams reason about incidents.
- [SRE Weekly](https://sreweekly.com/)
  Newsletter of reliability articles and incident write-ups. Use for: building a pattern library of real incidents.

## Gaps

- No source yet read on cgroup v2 memory and CPU limits, which matter for container OOM kills; needed before any container lesson.
- No high-trust source yet on firewall rules (nftables, iptables) and connection tracking for deeper network triage.
- No source yet on storage layers (LVM, XFS and ext4 behavior under failure).
- Gregg's "Systems Performance" book is recommended reading but was not consulted for this version; verify claims against it when extending.
