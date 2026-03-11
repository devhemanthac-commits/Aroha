import React from 'react';

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const variants = {
        primary: 'bg-charcoal text-white hover:bg-charcoal-light',
        secondary: 'bg-sage-500 text-white hover:bg-sage-600',
        outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
        ghost: 'hover:bg-sage-200 text-charcoal',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-sm',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-10 w-10 p-2 flex items-center justify-center',
    };

    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    return (
        <button
            ref={ref}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
