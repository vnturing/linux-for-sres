# Linux for SREs Glossary

The canonical vocabulary of this course. Lessons use these terms exactly; the reference shelf renders this file as `reference/glossary.html`.

## Method

**Resource**:
A physical component of a server that does work and can run out: CPU, memory, storage capacity, storage I/O, or a network interface.
_Avoid_: component, subsystem

**Utilization**:
The fraction of a resource's capacity that was busy over an interval.
_Avoid_: usage

**Saturation**:
Work waiting because a resource cannot serve it yet, usually shown as a queue length or time spent waiting.
_Avoid_: overload, bottleneck

**Errors**:
Counted failure events reported by a resource or the kernel, such as dropped packets, I/O failures, or OOM kills.
_Avoid_: problems, issues

**USE method**:
Checking utilization, saturation, and errors for every resource to find bottlenecks and faults quickly.
_Avoid_: the checklist

**Exonerate**:
To check a resource and conclude it is healthy, which removes it from the list of suspects.
_Avoid_: ignore, skip

**Problem statement**:
Four short lines, symptom, baseline, change, and scope, written before the first command.
_Avoid_: ticket summary

## CPU and load

**Load average**:
An exponentially damped average, over 1, 5, and 15 minutes, of tasks that are runnable or in uninterruptible sleep.
_Avoid_: CPU usage, CPU percentage

**Run queue**:
The tasks that are ready to run but waiting for a CPU, counted by the r column of vmstat.
_Avoid_: CPU backlog

**Uninterruptible sleep**:
A task state, shown as D, in which a task waits inside the kernel, usually for I/O, and cannot be interrupted or killed.
_Avoid_: hung, frozen

**Steal time**:
CPU time a hypervisor gave to another virtual machine while this one wanted to run.
_Avoid_: noisy neighbor time

**Pressure Stall Information (PSI)**:
Kernel files under /proc/pressure that report the share of time tasks were stalled waiting for CPU, memory, or I/O.
_Avoid_: pressure metrics

## Memory and storage

**Available memory**:
The kernel's estimate of memory usable for new applications without swapping, shown as the available column of free.
_Avoid_: free memory

**Page cache**:
Memory the kernel uses to hold file data, handed back when programs need it.
_Avoid_: buffers, wasted memory

**OOM killer**:
The kernel mechanism that kills a process when memory cannot be reclaimed, recorded in the kernel log.
_Avoid_: crash

**Inode**:
A filesystem record for one file; a filesystem can run out of inodes while bytes remain free.
_Avoid_: file entry

**Deleted-but-open file**:
A file whose name was removed while a process still holds it open, so its space stays allocated and du cannot see it.
_Avoid_: ghost file

## Network

**Connection refused**:
An immediate failure because the host answered and nothing accepted the connection.
_Avoid_: connection failed, down

**Connection timeout**:
A failure after waiting, because the connection attempt received no answer.
_Avoid_: refused, hang

**Bind address**:
The local address a listening socket accepts connections on; 127.0.0.1 accepts only clients on the same machine.
_Avoid_: listen IP

## Processes and services

**Unit**:
An object that systemd manages, such as a service or a timer.
_Avoid_: daemon

**Exit status**:
The number a process returns when it ends; values above 128 mean it died from a signal, 128 plus the signal number.
_Avoid_: error code

**File descriptor**:
A process's handle to an open file, socket, or pipe, listed under /proc/PID/fd.
_Avoid_: file handle

**System call**:
A request from a process to the kernel for something it cannot do itself, such as opening a file; strace prints them.
_Avoid_: kernel call

## Incidents

**Mitigation**:
An action that restores service without necessarily removing the cause.
_Avoid_: fix

**Evidence snapshot**:
A quick capture of system state, kernel messages, and logs taken before a change destroys them.
_Avoid_: backup
