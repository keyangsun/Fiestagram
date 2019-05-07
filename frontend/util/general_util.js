export const diffDate = date => {
    let dateObj = new Date(date);
    let today = new Date();
    let diff = Math.floor((today - dateObj) / 60000);

    if (diff < 60) {
        return diff + 'm';
    } else if (Math.floor(diff / 60) < 24) {
        return Math.floor(diff / 60) + 'h';
    } else if (Math.floor(diff / 1440) < 7) {
        return Math.floor(diff / 1440) + 'd';
    } else if (Math.floor(diff / 10080) < 5) {
        return Math.floor(diff / 10080) + 'w';
    } else if (Math.floor(diff / 43676.64) < 12) {
        return Math.floor(diff / 43676.64) + 'm';
    } else {
        return Math.floor(diff / 524160) + 'y';
    }
};