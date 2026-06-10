import React from 'react';

const FeatureCard = ({icon:Icon, cardTitle, cardDescription}) => {
    return (
        <>
             <div className="flex items-center gap-3  p-1">
                        {/* Icon Box */}
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#E6F4EA]">
                          
                          <Icon className="w-6 h-6 text-[#10B981]"></Icon>
                        </div>
            
                        {/* Text Content */}
                        <div className="space-y-1">
                          <h4 className="text-gray-800 font-bold text-base tracking-tight">
                            {cardTitle}
                          </h4>
                          <p className="text-gray-400 text-sm leading-snug max-w-[180px]">
                            {cardDescription}
                          </p>
                        </div>
                      </div>
        </>
    );
};

export default FeatureCard;