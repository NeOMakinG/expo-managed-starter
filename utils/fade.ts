export default function fadeConfig({ current }) {
    return {
        cardStyle: {
            opacity: current.progress,
        },
    }
};

