export function calculateTimeSincePosted(postDate: Date): string {
  const now = new Date();
    const timeDiferenceInMilliseconds = now.getTime() - postDate.getTime();
    if (timeDiferenceInMilliseconds < new Date("1970-01-01T01:00:00.00Z").getTime()) {
      const minutesSincePosted = new Date(timeDiferenceInMilliseconds).getMinutes();
      if (minutesSincePosted > 1 || minutesSincePosted <= 0) return `${minutesSincePosted} minutes`;
      return `${minutesSincePosted} minute`;
    }
    
    if (timeDiferenceInMilliseconds < new Date("1970-01-02T00:00:00.00Z").getTime()) {
      const hoursSincePosted = new Date(timeDiferenceInMilliseconds).getUTCHours();
      if (hoursSincePosted > 1) return `${hoursSincePosted} hours`;
      return `${hoursSincePosted} hour`;
    }

    if (timeDiferenceInMilliseconds < new Date("1971-01-01T00:00:00.00Z").getTime()) {
      const daysSincePosted = new Date(timeDiferenceInMilliseconds).getDate();
      if (daysSincePosted > 1) return `${daysSincePosted} days`;
      return `${daysSincePosted} day`;
    }

    const yearsSincePosted = Math.floor(timeDiferenceInMilliseconds / new Date("1971-01-01T00:00:00.00Z").getTime());
    if (yearsSincePosted > 1) return `${yearsSincePosted} years`;
    return `${yearsSincePosted} year`;
}