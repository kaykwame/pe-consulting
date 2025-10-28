// actions/inview.ts
import type { Action } from 'svelte/action';

interface InViewOptions {
	rootMargin?: string;
	threshold?: number;
	once?: boolean;
}

export const inView: Action<HTMLElement, InViewOptions> = (node, options = {}) => {
	let observer: IntersectionObserver;
	let isVisible = false;

	const { rootMargin = '0px', threshold = 0.1, once = true } = options;

	const onIntersect: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && !isVisible) {
				isVisible = true;
				node.dispatchEvent(new CustomEvent('inview'));
				if (once && observer) {
					observer.unobserve(node);
				}
			}
		});
	};

	observer = new IntersectionObserver(onIntersect, {
		rootMargin,
		threshold
	});

	observer.observe(node);

	return {
		destroy() {
			observer?.unobserve(node);
		}
	};
};
