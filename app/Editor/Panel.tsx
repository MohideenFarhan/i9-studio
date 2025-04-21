// Panel.tsx
"use client";

const Panel = () => {
    return (
        <div className="w-[300px] bg-gray-50 border-l p-4 overflow-y-auto min-h-screen space-y-6">
            <div>
                <h3 className="font-semibold mb-2">Styles</h3>
                <div id="styles" className="bg-white border rounded p-2 min-h-[150px]" />
            </div>

            <div>
                <h3 className="font-semibold mb-2">Traits</h3>
                <div id="traits" className="bg-white border rounded p-2 min-h-[150px]" />
            </div>

            <div>
                <h3 className="font-semibold mb-2">Layers</h3>
                <div id="layers" className="bg-white border rounded p-2 min-h-[150px]" />
            </div>
        </div>
    );
};

export default Panel;
