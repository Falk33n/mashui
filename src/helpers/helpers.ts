import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges Tailwind CSS class names.
 *
 * @param classes - Class names, arrays, or objects with conditional classes.
 * @returns A single string with merged class names, resolving Tailwind conflicts.
 *
 * @example
 * ```typescript
 * cn('p-4', isActive && 'bg-blue-500', 'text-white');
 * // Output: "p-4 bg-blue-500 text-white"
 * ```
 */
export function cn(...classes: ClassValue[]) {
	return twMerge(clsx(classes));
}
